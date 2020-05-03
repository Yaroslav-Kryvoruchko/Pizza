var OpenButton = document.querySelector(".mobile__button")
var CloseButton = document.querySelector(".close-button")
var MobileMenu = document.querySelector(".mobile__menu")

OpenButton.addEventListener("click", function() {
    MobileMenu.classList.add("open")
})

CloseButton.addEventListener("click", function() {
    MobileMenu.classList.remove("open")
})