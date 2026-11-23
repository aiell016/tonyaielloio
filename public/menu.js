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
