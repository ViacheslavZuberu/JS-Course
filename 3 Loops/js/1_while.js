var i = 0;

// Вывод цифр от 1 до 9
while (i < 10) {
    console.log(i);
    i++;
}

const MAIN_VALUE = 2;
var currenValue = 1;

// Таблица умножения на 2
while (currenValue <= 10) {
    var label = MAIN_VALUE + " * " + currenValue + " =";
    console.log(label, MAIN_VALUE * currenValue);
    currenValue++;
}