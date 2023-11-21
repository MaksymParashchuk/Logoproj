const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-menu");

btnSub.addEventListener("click", () => {
    body.classList.toggle("fixed");
    header.classList.toggle("active");
})

navLinks.addEventListener("click", () => {
    body.classList.remove("fixed");
    header.classList.remove("active");
})


// function myFunction(x) {
//   x.classList.toggle("change");
//   var overlay = document.getElementById("overlay");
//   overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const body = document.querySelector("body");
//   const header = document.querySelector(".header__nav");
//   const btnSub = document.querySelector(".header__menu-btn");

//   btnSub.addEventListener("click", () => {
//     body.classList.toggle("fixed");
//     header.classList.toggle("responsive");
//     myFunction(); // Додаємо виклик функції при кліку на бургер кнопку
//   });

//   // Змінюємо обробник кліка на overlay, щоб він також закривав вікно
//   document.getElementById("overlay").addEventListener("click", () => {
//     body.classList.remove("fixed");
//     header.classList.remove("responsive");
//     myFunction(); // Додаємо виклик функції при кліку на overlay
//   });
// });


// function myFunction() {
//   var x = document.getElementById("menu_item");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const body = document.querySelector("body");
//   const header = document.querySelector(".header__nav");

//   const btnSub = document.querySelector(".icon");
//   const navLinks = document.querySelector(".topnav");

//   btnSub.addEventListener("click", () => {
//     body.classList.toggle("fixed");
//     header.classList.toggle("responsive");
//   });

//   navLinks.addEventListener("click", () => {
//     body.classList.remove("fixed");
//     header.classList.remove("responsive");
//   });
// });