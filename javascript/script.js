const btnClosed = document.querySelector(".CloseMenu")
const btnOpen = document.querySelector(".MenuMobile")
const links = document.querySelectorAll("#navBar ul li a")
const nav = document.querySelector("#navBar")

const openMenu = ()=>{
     btnClosed.classList.toggle('show');
    nav.classList.toggle('act'); 
}
const closeMenu = ()=>{
     btnClosed.classList.remove('show');
    nav.classList.remove('act'); 
}
btnOpen.addEventListener('click', openMenu)

btnClosed.addEventListener("click",closeMenu) 

for(let link of links){
    link.addEventListener('click', closeMenu)
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
  
  

  });

const container = document.querySelectorAll(".container div");

  addEventListener('click', ()=>{

})


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let current = "Home";
  for(let section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  }
  for(let link of navLinks){
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  }
});

window.addEventListener('scroll', ()=>{
 const LinkProduct = document.querySelector(".Product")
 const container = document.querySelectorAll(".container div");

  if(LinkProduct.classList.contains("active")){
    for(let div of container){
      div.classList.add("active");
      
   }
  }else{
    for(let div of container){
      div.classList.remove("active");
   }
  }
})


