const open = () => {
    var button = document.querySelector("#open")

    button.addEventListener("click", () => {
        var bugger = document.querySelector(".bugger")
        bugger.classList.toggle("hide")
    })
}

const close = () => {
    var button = document.querySelector("#close")
    var bugger = document.querySelector(".bugger")

    button.addEventListener("click", () => {
        bugger.classList.toggle("hide")
    })

    var list = document.querySelectorAll(".bugger-menu")
    list.forEach(element => {
        element.addEventListener("click", () => {
            bugger.classList.toggle("hide")
        })
    });
}

open()
close()