//! Функции ввода

// Модальное окно с полем ввода (Dialog Box)
var name = prompt("Введите Ваше имя:");
var age = prompt("Введите Ваш возраст (полных лет):", 27);

console.log(name);
console.log(age);

// Модальное окно подтверждения (Confirmation Dialog Box)
var isHappy = confirm("Вы счастливы?");

console.log(isHappy);