let a = document.querySelector("a");

// Проверка на наличие атрибута
console.log(a.hasAttribute("href"));

// Получение значения атрибута
let href = a.getAttribute("href");
console.log(href);

// Создание / изменение значения атрибуиа
a.setAttribute("href", "http://hg.cc.ua");

// Исключение из правил (еще и для id)
a.href = "https://google.com.ua";

// Удаление атрибута
a.removeAttribute("href");