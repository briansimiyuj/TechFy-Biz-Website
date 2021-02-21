const hamburger = document.querySelector('.hamburger'),

      navList = document.querySelector(".nav-list") 
      

console.log(navList)

hamburger.addEventListener('click', () =>{

   console.log('working')

   hamburger.classList.toggle('active')

})