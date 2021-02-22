const hamburger = document.querySelector('.hamburger'),

      navList = document.querySelector(".nav-list"),

      slides = document.querySelectorAll('.slide'),

      auto  = true,

      interval = 5000
      
      let slideInterval
      

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

   console.log('working')


}




if (auto) {
    
   slideInterval = setInterval(() => {
       
       nextSlide()
   
   }, interval)

}