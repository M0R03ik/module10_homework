const input = document.querySelector('.header__input')
const sendButton = document.querySelector('.header__send-button')
const geoButton = document.querySelector('.header__geo-button')
const content = document.querySelector('.content')

const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com')

sendButton.addEventListener('click', () => {
  const userMessage = getMessage(input.value)
  userMessage.classList.add('message_user')
  websocket.send(input.value)
  input.value = ''
  websocket.onmessage = event => {
    getMessage(event.data)
  }
})

geoButton.addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const mapLink = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`
      let result = `<a href=${mapLink} target = '_blanc'>Гео-локация</a>`
      result = getMessage(result)
      result.classList.add('link')
    })
  } else {
    const err = 'Geolocation не поддерживается вашим браузером'
    getMessage(err)
  }
})

function getMessage(message) {
  const res = document.createElement('p')
  res.classList.add('message')
  res.innerHTML = message
  content.appendChild(res)
  content.scrollTop = content.scrollHeight
  return res
}
