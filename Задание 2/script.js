const button = document.querySelector('.button')

button.onclick = () => {
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const browserWidth = window.innerWidth
  const browserHeight = window.innerHeight
  alert(
    `Размер экрана: ${screenWidth}px x ${screenHeight}px,\nРазмер окна сайта: ${browserWidth}px x ${browserHeight}px`
  )
}
