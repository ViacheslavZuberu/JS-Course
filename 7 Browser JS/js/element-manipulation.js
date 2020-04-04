let liAnother = document.createElement("li");
let liBoil = document.createElement("li");
let ul = document.querySelector("ul");
let nextLi = document.querySelectorAll("li")[2];

liAnother.textContent = "Yet another list item!";
liBoil.textContent = "To boil the water";

let text = document.createTextNode(" Hello!");
liAnother.appendChild(text);

// Добавляем элемент на страницу
ul.insertBefore(liAnother, nextLi);
ul.appendChild(liBoil);
ul.appendChild(liAnother.cloneNode(true));

// Заменяем элемент
liAnother.parentElement.replaceChild(liBoil, liAnother);

liBoil.style.color = "#ff0000";
liBoil.style.backgroundColor = "#550000";

liBoil.classList.add("my-li");
liBoil.classList.add("clearfix");

console.log(liBoil.className);
console.log(liBoil.classList);

let ol = document.querySelector("ol");

for (let i = 0; i < ol.children.length; i++) {
    console.log(
        ol.children[i].textContent, 
        ol.children[i].dataset.discount * 100 + "%"
    );
}

console.log(ol.children[0].dataset);

ol.children[0].dataset.hello = "Hi!";

let table = document.querySelector("table");

console.log(table.rows);
console.log(table.rows[0].cells[0]);

// Обход ячеек таблицы
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        console.log(table.rows[i].rowIndex);
        table.rows[i].cells[j].textContent = i * j;
    }
}