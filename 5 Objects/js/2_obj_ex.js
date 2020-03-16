let dog = {
    name: "Tayson",
    age: 8
};

dog.age = 18;
dog.breed = "Bulldog";

console.log(dog);
console.log(dog.sdjfsjdansdj);

dog.sdjfsjdansdj = undefined;

if ("sdjfsjdansdj" in dog) {
    console.log("Свойство sdjfsjdansdj есть!");
}
