const toggleBotton = document.querySelector(".navbar_toggleButton");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBotton.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});