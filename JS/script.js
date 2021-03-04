const hamburger = document.querySelector('.hamburger'),

      navList = document.querySelector(".nav-list"),

      slides = document.querySelectorAll('.slide'),
      
      asideSlides = document.querySelectorAll('aside .slide'),

      auto  = true,

      interval = 5000
      
      let slideInterval


      console.log(asideSlides)
      

hamburger.addEventListener('click', () =>{

   hamburger.classList.toggle('active')
   
   navList.classList.toggle('active')

})








const nextSlide = () =>{

   const current = document.querySelector('#current')

   current.removeAttribute('id')


   if (current.nextElementSibling) {
      
      current.nextElementSibling.setAttribute('id', 'current')

   } else {

      slides[0].setAttribute('id', 'current')
      
   }

   setTimeout(() => {
      
      current.removeAttribute('id')

   })

}




if (auto) {
    
   slideInterval = setInterval(() => {
       
       nextSlide()
   
   }, interval)

}