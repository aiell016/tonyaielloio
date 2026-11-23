const header = document.querySelector('.site-header')
const button = header.querySelector('.menu-toggle')
const navigation = document.getElementById(button.getAttribute('aria-controls'))

function setMenu(open) {
  navigation.classList.toggle('open', open)
  button.setAttribute('aria-expanded', String(open))
  button.textContent = open ? 'Close menu' : 'Menu'
}
button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'))
header.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    setMenu(false)
    button.focus()
  }
})
button.hidden = false
header.classList.add('menu-ready')

const copyrightYear = document.getElementById('copyright-year')
function refreshCopyrightYear() {
  const now = new Date()
  copyrightYear.textContent = String(now.getFullYear())
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  window.setTimeout(refreshCopyrightYear, midnight - now)
}
refreshCopyrightYear()
