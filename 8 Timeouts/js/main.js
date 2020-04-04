/**
 * Декомпозиция задачи
 * ===================
 * Раз в 1 секунду:
 * 1. Сгенерировать случайное число
 * 2. Выбирать случайную клетку
 *      - Достать из DOM'а
 *      - Используя случайное число, выбрать необходимую кетку
 * 3. Выбирать случайный цвет
 *      - rgb(100, 77, 33);
 * 4. Выбранную случайную клетку "закрасить случайным цветом"
 */
function colorRandomCell() {
    function clear(cells) {
        for(let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "";
        }
    }

    // 1. Сгенерировать случайное число
    function random(min, max) {
        let randomValue = min + Math.random() * (max - min);
        return Math.floor(randomValue);
    }

    // 2. Выбирать случайную клетку
    let cells = document.querySelectorAll("td");
    let cell = cells[random(0, cells.length)];

    clear(cells);

    // 3. Выбирать случайный цвет
    function generateColor() {
        let color = [ 
            random(0, 255),
            random(0, 255),
            random(0, 255),
        ];

        return `rgb(${color[0]}, ${color[1]}, ${color[2]} )`;
    }

    // 4. Выбранную случайную клетку "закрасить случайным цветом"
    cell.style.backgroundColor = generateColor();
}

setInterval(colorRandomCell, 1000);