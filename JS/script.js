const hamburger = document.querySelector('.hamburger'),

      navList = document.querySelector(".nav-list"),

      slides = document.querySelectorAll('.slide'),
      
      asideSlides = document.querySelectorAll('aside .slide'),

      auto  = true,

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












const addLoader = () =>{

   const body = document.querySelector("body") 

   const loader = document.createElement("div")

   loader.className = "loader" 

   body.appendChild(loader)

   
   
   for (let i = 0; i < 2; i++) {

      const circles = document.createElement("div")

      circles.className = "circle"

      loader.appendChild(circles)
   }



   const opacity = () =>{

      const opacities  = [loader, body]

      opacities.forEach(opa => {
         
         opa.classList.add("opacity")

      })

       
  }
  
  
  setTimeout(() => {
  
      opacity()      
  
  }, 3000)

}

addLoader()