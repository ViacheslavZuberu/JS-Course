var age = +prompt("Enter your age");

if (age >= 70) {
    console.log("Вы отлично справляетесь!");
} else if (age >= 50 && age < 70) {
    // ...
} else if (age >= 22 && age < 50) {
    // ...
} else {
    // ...
}

console.log("Дорогой друг!");

var name = prompt("Enter your name!");

switch(name) {
    case "Bob":
        console.log("Ну ты жлоб");
        break;
    case "Tom":
        console.log("Где мой дом?");
        break;
    case "Kate":
        console.log("Дай свой скейт!");
        break;
    default:
        console.log("Меняй имя, Карл!");
}

var reference = age < 16 ? age === 7 ? "7-летний отрок" : "Отрок" : "Мудрец";

console.log("Привет, " + reference + "!");