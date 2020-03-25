let a = 5;
let b = 7;

a = b;
a = 9;

console.log(b); // 7

// ---

let c = 77;

function changeNumber(num) {
    num = 88;
}

changeNumber(c);
console.log(c);

// ---

let person1 = {
    name: "Tom",
    surname: "Smith"
};

let person2 = person1;

person2.name = "Bob";

console.log(person1.name);

function changeName(person) {
    person.name = "Mr/Mrs " + person.name;
}

changeName(person1);

console.log(person1.name);