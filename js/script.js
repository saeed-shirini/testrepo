let toggleMenu = document.querySelector(".toggle-menu");
let menuList = document.querySelector("ul.menu-list");

toggleMenu.addEventListener("click",function(){
    menuList.classList.toggle("active")
})