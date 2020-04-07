// DOM | BOM

window.onload = function() {
    let element = document.body.firstElementChild;

    // 07.04 - Циклы
    // while (element.nextElementSibling !== null) {
    //     console.dir(element);
    //     element = element.nextElementSibling;
    // }

    function showElements(element) {
        console.dir(element);

        for (let i = 0; i < element.children.length; i++) {
            if (element.children[i].children.length > 0) {
                showElements(element.children[i]);
            } else {
                console.dir(element.children[i]);
            }
        }
    }

    showElements(document.body);

    function doStuff() {
        alert("Hello, CKW-27!");
    }

    function addToBody() {
        let p = document.createElement("p");
        p.textContent = "Hello!";
        document.body.append(p);
    }

    let button = document.querySelector("#my-btn");

    button.addEventListener("click", doStuff);
    button.addEventListener("click", addToBody);

    let listItems = document.querySelectorAll("li");

    // CS50

    //! Ранее
    for (let i = 0; i < listItems.length; i++) {
        let colorItem = function() {
            listItems[i].style.backgroundColor = "#ff0";
        };

        listItems[i].addEventListener("click", colorItem);
    }

    //* Сейчас
    function colorItem() {
        this.style.backgroundColor = "#ff0";
    }

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", colorItem);
    }

    let block = document.querySelector(".block");

    block.addEventListener("click", function() {
        this.classList.toggle("showed");
    });

};

