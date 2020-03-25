// Массивы (Array)

let numbers = [ 1, 1, 2, 3, 5 ];
let oldNumbers = new Array(1, 1, 2, 3, 5);

console.log(numbers[4]);
console.log(oldNumbers);

numbers[4] = 10;

console.log(numbers.length);

numbers[9] = 77;

console.log(numbers);

// Обход массива

let sum = 0;

for (let i = 0; i < oldNumbers.length; i++) {
    sum += oldNumbers[i];
}

console.log(sum); // 12

// Методы массивов

let values = [];

/**
 * let arr = [];
 * 
 * arr.push(element) - вставить в конец
 * arr.pop() - вырезать элемент с конца
 * arr.unshift(element) - вставить в начало
 * arr.shift() - вырезать с начала
 */

values.push(22);
values.push(23);
values.push(24, 12, 23, 45);

console.log(values);

console.log(values.pop());

console.log(values);

values.unshift(12, 7, 8);

console.log(values);

console.log(values.shift());

values.length = 2;

console.log(values);

