const hamburger = document.querySelector('.hamburger'),

      navList = document.querySelector(".nav-list") 
      

hamburger.addEventListener('click', () =>{

   hamburger.classList.toggle('active')
   
   navList.classList.toggle('active')

   console.log('working')

})