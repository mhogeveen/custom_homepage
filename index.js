document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('#form')
   const input = document.querySelector('#input')

   form.addEventListener('submit', (e) => {
      e.preventDefault()
      window.open(`https://www.google.com/search?q=${input.value}`, '_self')
   })

   const datetime = document.querySelector('#datetime')
   const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
   const date = new Date().toLocaleDateString([])
   datetime.innerHTML = `<div><h2>${time}</h2><h3>${date}</h3></div>`
})
