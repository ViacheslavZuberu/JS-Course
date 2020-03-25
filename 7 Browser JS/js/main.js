console.dir(document.documentElement);
console.dir(document.body);

let body = document.body;

// Первый дочерний ЭЛЕМЕНТ
console.log(body.firstElementChild);

// Все дочерние ЭЛЕМЕНТЫ body
console.log(body.children);

// Поиск элементов

// Поиск по ID (document.getElementById())
let myPara = document.getElementById("my-para");
console.log(myPara);

// Поиск по имени тега
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let divs = document.getElementsByTagName("div");
console.log(divs);

// querySelector'ы
console.log(document.querySelector("li"));