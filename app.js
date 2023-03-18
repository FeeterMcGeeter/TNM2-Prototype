// GIVING THE CURRENT LINK THE "ACTIVE" TAG FOR STYLING
function setActive() {
    navLink = document.getElementById("nav").getElementsByClassName("nav__list-link");
    for (i = 0; i < navLink.length; i++) {
        if (document.location.href.indexOf(navLink[i].href) >= 0) {
            navLink[i].className = "active";
        };
    };
};

window.onload = setActive;

// FORM SUBMISSION AND RESETTING ON CLICK
const formToReset = document.getElementById("request-form");
formToReset.addEventListener("submit", (e) => {
    e.preventDefault();
    formToReset.reset();
    alertUser();
});

function alertUser() {
    alert("Submission Successful");
}

// HAMBURGER MENU FOR RESPONSIVE NAVBAR
const burgerMenu = document.querySelector(".nav__hamburger");
const navList = document.querySelector("#nav__list");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("current");
    navList.classList.toggle("current");
  });
  
// CLOSES THE MOBILE NAVBAR WHEN CLICKING ON LINKS
document.querySelectorAll(".nav__list-link").forEach(n => n.addEventListener("click", () => {
burgerMenu.classList.remove("current");
navList.classList.remove("current");
}))

// NEED TO MAKE THE PAGES MORE RESPONSIVE 
// TRY TO ADD FUNCTIONALITY TO THE SEARCH BAR