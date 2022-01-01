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