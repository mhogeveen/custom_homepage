document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('#form')
   const input = document.querySelector('#input')
   const weatherIcon = document.querySelector('#weather_icon')
   const weatherTemp = document.querySelector('#weather_temp')

   form.addEventListener('submit', (e) => {
      e.preventDefault()
      window.open(`https://www.google.com/search?q=${input.value}`, '_self')
   })

   const datetime = document.querySelector('#datetime')
   const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
   const date = new Date().toLocaleDateString([])
   datetime.innerHTML = `<div><h2>${time}</h2><h3>${date}</h3></div>`

   const setWeather = () => {
      const city = 'hilversum'
      fetch(
         `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d98b5e820cf42990cd49cddf707d4a3a`
      )
         .then((res) => res.json())
         .then((res) => {
            weatherIcon.setAttribute(
               'src',
               `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
            )
            weatherTemp.innerHTML = `<h2>${Math.round(res.main.temp)}</h2><h3>&deg;C</h3>`
         })
   }

   setWeather()
})
