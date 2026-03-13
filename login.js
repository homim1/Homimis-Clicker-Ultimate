// function toggleForm() {
//     const reg = document.getElementById('register-form');
//     const log = document.getElementById('login-form');
//     reg.style.display = reg.style.display === 'none' ? 'block' : 'none';
//     log.style.display = log.style.display === 'none' ? 'block' : 'none';
// }

// // Регистрация
// function register() {
//     const user = document.getElementById('reg-login').value;
//     const pass = document.getElementById('reg-pass').value;

//     if (user && pass) {
//         localStorage.setItem(user, pass); // Сохраняем: ключ - логин, значение - пароль
//         alert('Регистрация успешна!');
//         toggleForm();
//     } else {
//         alert('Заполните все поля');
//     }
// }

// function login() {
//     const user = document.getElementById('log-login').value;
//     const pass = document.getElementById('log-pass').value;
//     const savedPass = localStorage.getItem(user);

//     if (savedPass && savedPass === pass) {
//         // СОХРАНЯЕМ ТЕКУЩЕГО ПОЛЬЗОВАТЕЛЯ
//         localStorage.setItem('currentUser', user); 
        
//         alert('Вход выполнен!');
//         // ПЕРЕХОД НА ГЛАВНУЮ
//         window.location.href = 'index.html'; 
//     } else {
//         alert('Неверный логин или пароль');
//     }
// }