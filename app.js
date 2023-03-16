// GIVING THE CURRENT LINK THE "ACTIVE" TAG FOR STYLING
function setActive() {
    navLink = document.getElementById("navbar").getElementsByClassName("nav-link");
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

// NEED TO FIX THE IMAGES ON THE DOG, CAT, AND FISH PAGE
// NEED TO MAKE THE PAGES MORE RESPONSIVE 
// FINISH STYLING THE FORM
// TRY TO ADD FUNCTIONALITY TO THE SEARCH BAR