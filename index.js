document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('#form')

   form.addEventListener('submit', (e) => {
      e.preventDefault()
      window.open('https://www.google.com', '_blank')
   })
})
