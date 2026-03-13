function register(){

const login = document.getElementById("reg-login").value;
const pass = document.getElementById("reg-pass").value;

if(!login || !pass){
alert("Введите логин и пароль");
return;
}

if(localStorage.getItem("user_"+login)){
alert("Пользователь уже существует");
return;
}

localStorage.setItem("user_"+login,pass);

alert("Аккаунт создан!");

}

function login(){

const login = document.getElementById("log-login").value;
const pass = document.getElementById("log-pass").value;

const savedPass = localStorage.getItem("user_"+login);

if(savedPass === pass){

localStorage.setItem("currentUser",login);

location.href="index.html";

}else{

alert("Неверный логин или пароль");

}

}

function toggleForm(){

const reg = document.getElementById("register-form");
const log = document.getElementById("login-form");

if(reg.style.display==="none"){
reg.style.display="block";
log.style.display="none";
}else{
reg.style.display="none";
log.style.display="block";
}

}