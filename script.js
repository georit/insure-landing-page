/* *****Variables***** */
const hamburgerMenu = document.getElementById("hamburger-icon");
const mobileNav = document.getElementById("nav-links");

/* *****Functions***** */

/* *****Event listeners***** */
hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.className === "fas fa-bars hamburger-icon") {
    hamburgerMenu.className = "fas fa-times hamburger-icon";
    hamburgerMenu.style.padding = "0.3rem 0.4rem";
    mobileNav.classList.add("active");
  } else {
    hamburgerMenu.className = "fas fa-bars hamburger-icon";
    hamburgerMenu.style.padding = "0.3rem";
    mobileNav.classList.remove("active");
  }
});
