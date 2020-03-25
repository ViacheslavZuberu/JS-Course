let person = {
    name: "Tom",
    surname: "Smith"
};

let person2 = {
    name: null
};

person.name = "Bob";
person["name"] = "Bob";

for (let i = 0; i < 10; i++) {
    person["prop" + i] = i;
}

console.log(person.name); // "Bob"

person.age = 27;

console.log(person);

console.log(person.top);

delete person.age;

let triangle = {
    a: 22,
    b: 33,
    c: 12
};

// Способы проверки свойства на наличие

// 1. Проверка на undefined

person.top = undefined;

if (person.top === undefined) {
    console.log("Такого свойства нет! (top)");
}

// 2. Оператор in

if ("top" in person) {
    console.log("Свойство существует! (top)");
}

// Обход свойств объекта

for (let prop in person) {
    document.writeln(person[prop]);
}

// Функция-конструктор
function Person(name, surname, age) {
    // this = {};
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.sayHi = function() {
        console.log("Hello, my name is " + this.name);
    };
    // return this;
}

let tom = new Person("Tom", "Soyer", 22);

console.log(tom);

let point = {
    x: 1,
    y: 2
};

let point2 = new Point(1, 2);