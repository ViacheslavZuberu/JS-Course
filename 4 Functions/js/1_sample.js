function printHello(name) {
    if (name === undefined) {
        return;
    }

    console.log("Hello, " + name);
}

printHello();

function hanoi(cir, start, mid, end) {
    if (cir === 1) {
        console.log(start, "->", end);
        return;
    }

    hanoi(cir - 1, start, end, mid);
    console.log(start, "->", end);
    hanoi(cir - 1, mid, start, end);
}

hanoi(3, 1, 2, 3);