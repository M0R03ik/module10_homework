const button = document.querySelector('.button')

button.addEventListener('click', () => {
  const icon = document.querySelector('.button__icon')
  const iconBlack = document.querySelector('.button__icon_black')

  icon.classList.toggle('hidden')
  iconBlack.classList.toggle('hidden')
})
