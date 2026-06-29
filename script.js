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