#!/usr/bin/env bash
set -euo pipefail

: "${IONOS_SFTP_HOST:?Set IONOS_SFTP_HOST in the SFTPIonosTonyAielloio GitHub environment}"
: "${IONOS_SFTP_USER:?Set IONOS_SFTP_USER in the SFTPIonosTonyAielloio GitHub environment}"
: "${IONOS_SFTP_PASSWORD:?Set IONOS_SFTP_PASSWORD in the SFTPIonosTonyAielloio GitHub environment}"
[[ -f dist/index.html && -f dist/.htaccess && -f dist/teaching/index.html ]] || {
  echo "The production build is incomplete." >&2
  exit 1
}
if [[ ! "$IONOS_SFTP_HOST" =~ ^[[:alnum:]][[:alnum:].-]*$ ]]; then
  echo "Enter the IONOS server name without a protocol, port or path." >&2
  exit 1
fi

work=$(mktemp -d)
site=https://tony.aiello.io
proof=
transfer() {
  LFTP_PASSWORD="$IONOS_SFTP_PASSWORD" lftp --norc --env-password -u "$IONOS_SFTP_USER" "sftp://$IONOS_SFTP_HOST" <<EOF
set cmd:fail-exit yes
set net:max-retries 2
set net:timeout 20
set sftp:connect-program "ssh -a -x -oHostKeyAlgorithms=ssh-ed25519 -oStrictHostKeyChecking=yes -oUserKnownHostsFile=$work/known_hosts -oGlobalKnownHostsFile=/dev/null"
set xfer:use-temp-file yes
$1
bye
EOF
}

cleanup() {
  if [[ -n "$proof" ]]; then
    transfer "rm $proof" || echo "Could not remove temporary verification file $proof." >&2
  fi
  rm -rf -- "$work"
}
trap cleanup EXIT

# Compare the offered public key with the ED25519 fingerprint published by IONOS.
# https://www.ionos.com/help/hosting/ssh-zugaenge-einrichten-und-verwalten/overview-of-ssh-fingerprints-in-ionos-web-hosting/
ssh-keyscan -T 15 -t ed25519 "$IONOS_SFTP_HOST" > "$work/known_hosts"
fingerprints=$(ssh-keygen -E sha256 -lf "$work/known_hosts" | awk '{print $2}' | sort -u)
if [[ "$fingerprints" != 'SHA256:1gx2w8Rtv3wCgi7Jh8myf/KVd72cRQbow03UP8P095Q' ]]; then
  echo "The server key differs from the published IONOS Web Hosting key." >&2
  exit 1
fi

fetch_page() {
  curl --fail --silent --show-error --location --compressed --proto '=https' \
    --proto-redir '=https' --max-time 25 --retry 2 "$1" --output "$work/response"
}

# A new file must be visible at this exact domain before any site file is replaced.
proof="portfolio-deploy-$(openssl rand -hex 16).txt"
openssl rand -hex 24 > "$work/proof"
transfer "put $work/proof -o $proof"
if ! fetch_page "$site/$proof" || ! cmp -s "$work/proof" "$work/response"; then
  echo "The SFTP login directory does not serve $site. Check its Directory setting in IONOS." >&2
  exit 1
fi

# Publish assets before pages that reference them. The home page switches last.
mkdir "$work/pages"
(cd dist && find . -type f -name '*.html' ! -path './index.html' \
  -exec cp --parents --target-directory="$work/pages" -- {} +)
transfer "mirror --reverse --transfer-all --no-perms --no-symlinks --exclude-glob '*.html' --exclude-glob '.htaccess' dist .
mirror --reverse --transfer-all --no-perms --no-symlinks $work/pages .
put dist/.htaccess -o .htaccess
put dist/index.html -o index.html"

for route in '' 'research/' 'teaching/' 'projects/project-volga/'; do
  if ! fetch_page "$site/${route}?verify=$proof" || ! cmp -s "dist/${route}index.html" "$work/response"; then
    echo "The public URL $site/$route did not return its tested build." >&2
    exit 1
  fi
done
echo "Verified the home page, research, teaching and Project Volga on $site."
