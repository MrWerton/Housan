const btnClosed = document.querySelector(".CloseMenu")
const btnOpen = document.querySelector(".MenuMobile")
const links = document.querySelectorAll("#navBar ul li a")
const nav = document.querySelector("#navBar")

const openMenu = ()=>{
     btnClosed.classList.toggle('show');
    nav.classList.toggle('act'); 
}
btnOpen.addEventListener('click', openMenu)

btnClosed.addEventListener("click",openMenu) 

for(let link of links){
    link.addEventListener('click', openMenu)
}