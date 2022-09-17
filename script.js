const login = document.getElementById("login");
login.addEventListener('click',function(){
    
    const loginPage = document.getElementById("loginPage");
    loginPage.style.display= "block";
    
})
const register = document.getElementById("register");
register.addEventListener('click',function(){
    
    const registerPage = document.getElementById("registerPage");
    registerPage.style.display= "block";
    
})
const closeRegister = document.getElementById("closeRegister");
closeRegister.addEventListener('click',function(){
    const registerPage = document.getElementById("registerPage");
    registerPage.style.display= "none";
    
})
const closeLogin = document.getElementById("closeLogin");
closeLogin.addEventListener('click',function(){
    const loginPage = document.getElementById("loginPage");
    loginPage.style.display= "none";
    
})
