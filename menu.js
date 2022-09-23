const menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click',function(){
    
    const menu = document.getElementById("menu");
    menu.style.display = "block";
})
const closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener('click',function(){
    const menu = document.getElementById("menu");
    menu.style.display = "none";
    
})
const loginMenu = document.getElementById("loginMenu");
loginMenu.addEventListener('click',function(){
    
    const loginPage = document.getElementById("loginPage");
    loginPage.style.display= "block";
    
})
const closeLoginMenu = document.getElementById("closeLoginMenu");
closeLoginMenu.addEventListener('click',function(){
    const loginPage = document.getElementById("loginPage");
    loginPage.style.display= "none";
    
})