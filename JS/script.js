const hamburger = document.querySelector('.hamburger'),

      navList = document.querySelector(".nav-list"),

      slides = document.querySelectorAll('.slide'),
      
      asideSlides = document.querySelectorAll('aside .slide'),

      auto  = false,

      interval = 5000
      
      let slideInterval
      
      

hamburger.addEventListener('click', () =>{

   hamburger.classList.toggle('active')
   
   navList.classList.toggle('active')

})








const nextSlide = () =>{

   const current = document.querySelector('#current')
   
   const currentS = document.querySelector('#currentS')

   current.removeAttribute('id')

   currentS.removeAttribute('id')


   if (current.nextElementSibling) {
      
      current.nextElementSibling.setAttribute('id', 'current')

   } else {

      slides[0].setAttribute('id', 'current')
      
   }


   if (currentS.nextElementSibling) {
      
      currentS.nextElementSibling.setAttribute('id', 'currentS')

   } else {

      asideSlides[0].setAttribute('id', 'currentS')
      
   }

   setTimeout(() => {
      
      current.removeAttribute('id')
      
      currentS.removeAttribute('id')

   })

}




if (auto) {
    
   slideInterval = setInterval(() => {
       
       nextSlide()
   
   }, interval)

}