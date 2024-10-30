const open = () => {
    var button = document.querySelector("#open")

    button.addEventListener("click", () => {
        var bugger = document.querySelector(".bugger")
        bugger.classList.toggle("hide")
    })
}

const close = () => {
    var button = document.querySelector("#close")

    button.addEventListener("click", () => {
        var bugger = document.querySelector(".bugger")
        bugger.classList.toggle("hide")
    })
}

open()
close()