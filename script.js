// Get the button 
const menuBtn= document.getElementById("menu-btn")

// getting the mobile enu 
const mobileMenu = document.getElementById("mobile-menu")

// when the button is clicked .....
menuBtn.addEventListener("click", function() {
    // if Menu is hidden,show it.
    //if Menu is showing,hide it.

    mobileMenu.classList.toggle("hidden");

    // make the menu display vertically
    mobileMenu.classList.toggle("flex")
});
// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

// Show button after scrolling 300px
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.classList.remove("hidden");
    } else {
        topBtn.classList.add("hidden");
    }

});

// Scroll smoothly to the top
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});