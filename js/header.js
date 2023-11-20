// const body = document.querySelector("body");
// const header = document.querySelector(".header");
// const btnSub = document.querySelector(".header__menu-btn");
// const navLinks = document.querySelector(".header__menu_item");

// btnSub.addEventListener("click", () => {
//     body.classList.toggle("fixed");
//     header.classList.toggle("responsive");
// })

// navLinks.addEventListener("click", () => {
//     body.classList.remove("fixed");
//     header.classList.remove("responsive");
// })

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }