function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Rectangle(x1, y1, x2, y2) {
    this.leftUpperPoint = new Point(x1, y1);
    this.rightLowerPoint = new Point(x2, y2);
}

let rect = new Rectangle(12, 43, 43, 45);

console.log(rect);

// Задание №1
// Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена)
function printRect(r) {
    document.writeln("A: (" + r.leftUpperPoint.x + ", " + r.leftUpperPoint.y + ");");
    document.writeln("B: (" + r.rightLowerPoint.x + ", " + r.rightLowerPoint.y + ");");
}

printRect(rect);

// Задание №2
// Функция принимает объект-прямоугольник и возвращает
// его ширину
function printWidth(r) {
    return Math.abs(r.rightLowerPoint.x - r.leftUpperPoint.x);
}

document.writeln(printWidth(rect));

function changeWidth(r, lWidth) {
    // ...
}

changeWidth(rect, 12);
printRect(rect);