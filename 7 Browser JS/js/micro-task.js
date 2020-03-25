let listItems = document.querySelectorAll("li.menu-item");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let definedValues = [777, 8, 12, 27];
let cache = [];

let arr = [1, 2, 3, 4];

arr.indexOf(3); // -> 2
arr.indexOf(324); // -> -1

for (let i = 0; i < listItems.length; i++) {
    let randomIndex = getRandomInt(0, definedValues.length);

    while (cache.indexOf(randomIndex) !== -1) {
        randomIndex = getRandomInt(0, definedValues.length);
    }

    cache.push(randomIndex);

    listItems[i].textContent = definedValues[randomIndex];
}