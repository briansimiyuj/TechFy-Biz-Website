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