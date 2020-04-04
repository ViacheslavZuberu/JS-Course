function showHelloMessage(message) {
    let p = document.createElement("p");
    p.textContent = message;

    document.body.appendChild(p);
}

let timeoutId = setTimeout(showHelloMessage, 2000, "Goodbye!");

showHelloMessage("Hello from the OUTSIDE!");

let intervalId = setInterval(showHelloMessage, 200, "Hello from the INTERVAL!");

clearTimeout(timeoutId);
clearInterval(intervalId);