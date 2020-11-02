/* *****Variables***** */
const hamburgerMenu = document.getElementById("hamburger-icon");
const mobileNav = document.getElementById("nav-links");

/* *****Functions***** */
function displayMobileMenu() {
  hamburgerMenu.className = "fas fa-times hamburger-icon";
  hamburgerMenu.style.padding = "0.3rem 0.4rem";
  mobileNav.classList.add("active");
}

function hideMobileMenu() {
  hamburgerMenu.className = "fas fa-bars hamburger-icon";
  hamburgerMenu.style.padding = "0.3rem";
  mobileNav.classList.remove("active");
}

/* *****Event listeners***** */
hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.className === "fas fa-bars hamburger-icon") {
    displayMobileMenu();
  } else {
    hideMobileMenu();
  }
});
