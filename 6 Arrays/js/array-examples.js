let accountBalance = [ -100, -400, -250, -150, -350 ];

function countSum(balance) {
    let sum = 0;

    for (let i = 0; i < balance.length; i++) {
        sum += balance[i];
    }

    return sum;
}

console.log(countSum(accountBalance));

let realBalance = [
    {
        value: -100,
        purpose: "Заказ в кафе"
    },
    {
        value: -400,
        purpose: "Покупки в супермаркете Класс"
    },
    {
        value: -250,
        purpose: "Такси"
    }
];

function countRealBalanceSum(realBalance) {
    let sum = 0;

    for (let i = 0; i < realBalance.length; i++) {
        sum += realBalance[i].value;
    }

    return sum;
}

console.log(countRealBalanceSum(realBalance));

function printRealBalance(realBalance) {
    for (let i = 0; i < realBalance.length; i++) {
        document.write(realBalance[i].purpose + ": " + realBalance[i].value + "UAH");
        document.write("<br><hr><br>");
    }
}

printRealBalance(realBalance);

accountBalance = [ -100, -400, -250, -150, -350 ];

accountBalance.splice(1, 2, -500);

console.log(accountBalance);