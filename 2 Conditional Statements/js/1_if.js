let age = 8;

// Неполный блок условной инструкции
if (age < 18) {
    console.log("Child");
}

// if-else
if (age > 1 && age <= 7) {
    console.log("Little child")
} else {
    console.log("Child or Teen or Adult");
}

// Полная форма условной инструкции
if (age > 1 && age <= 7) {
    console.log("Child");
} else if (age > 7 && age < 18) {
    console.log("Teen");
} else {
    console.log("Adult");
}

/**
 * if всегда должен быть первой инструкцией
 * else if может быть несколько (могут и отсутсвовать)
 * else может отсутсвовать, но должен быть только в конце
 */