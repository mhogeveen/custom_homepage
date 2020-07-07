document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('#form')
   const input = document.querySelector('#input')
   const weatherIcon = document.querySelector('#weather_icon')
   const weatherTemp = document.querySelector('#weather_temp')
   const refresh = document.querySelector('#refresh')

   form.addEventListener('submit', (e) => {
      e.preventDefault()
      window.open(`https://www.google.com/search?q=${input.value}`, '_self')
   })

   refresh.addEventListener('click', () => {
      location.reload()
   })

   const datetime = document.querySelector('#datetime')
   const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
   const date = new Date().toLocaleDateString([])
   datetime.innerHTML = `<div><h2>${time}</h2><h3>${date}</h3></div>`

   const setWeather = () => {
      getCoords = async () => {
         let lat = 0
         let lon = 0
         await window.navigator.geolocation.getCurrentPosition((pos) => {
            lat = pos.coords.latitude
            lon = pos.coords.longitude
            fetchWeather({ lat, lon })
         })
      }

      const fetchWeather = (props) => {
         const { lat, lon } = props
         const apiKey = 'd98b5e820cf42990cd49cddf707d4a3a'
         fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
         )
            .then((res) => res.json())
            .then((res) => {
               console.log(res)
               weatherIcon.setAttribute(
                  'src',
                  `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
               )
               weatherTemp.innerHTML = `<h2>${Math.round(res.main.temp)}</h2><h3>&deg;C</h3>`
            })
      }

      getCoords()
   }

   setWeather()
})
