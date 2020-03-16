let person = {
    name: "Tom",
    surname: "Smith",
    age: 22,

    sayHi: function() {
        console.log("Hello!");
    }
};

console.log(person);

console.log(person.age);
person.sayHi();

let name = "sadasd";

let personSecond = {
    name: name,
    surname: "Doe",
    age: 33,

    passport: {
        ser: "MT",
        num: "288777"
    },

    balance1: 22,
    balance2: 127,
    balance3: 0,

    sayHi: function() {
        console.log("Hello!");
    }
};

console.log(personSecond.surname);
console.log(personSecond["surname"]);

personSecond["say" + "Hi"]();

function getOptimalBalanceName(user) {
    // ...
}

personSecond[getOptimalBalanceName(personSecond)];

function NoteBook(pageCount, type, width, height) {
    // this = {}
    this.pageCount = pageCount;
    this.type = type;
    this.width = width;
    this.height = height;

    this.open = function() {
        console.log("The notebook is opened!");
    };
    // return this
}

let noteBook = new NoteBook(28, "#", 10, 18);
let noteBook1 = new NoteBook(28, "#", 10, 18);
let noteBook2 = new NoteBook(28, "#", 10, 18);
let noteBook3 = new NoteBook(28, "#", 10, 18);
let noteBook4 = new NoteBook(28, "#", 10, 18);
let noteBook5 = new NoteBook(28, "#", 10, 18);
let noteBook6 = new NoteBook(28, "#", 10, 18);
let noteBook7 = new NoteBook(28, "#", 10, 18);

console.log(noteBook);