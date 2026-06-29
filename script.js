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

// HERO SLIDER USING FETCH API


const heroSlider = document.getElementById("hero-slider");

fetch("data/gallery.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load gallery.json");
        }

        return response.json();
    })

    .then(images => {

        // Create image elements
        images.forEach((photo, index) => {

            const img = document.createElement("img");

            img.src = photo.image;
            img.alt = photo.title;

            img.className =
                "absolute inset-0 w-full h-full object-cover";

            // Show the first image
            if (index === 0) {
                img.classList.add("active");
            }

            heroSlider.appendChild(img);

        });

        // Get all images
        const slides = heroSlider.querySelectorAll("img");

        let current = 0;

        // Change image every 4 seconds
        setInterval(() => {

            slides[current].classList.remove("active");

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            slides[current].classList.add("active");

        }, 4000);

    })

    .catch(error => {

        console.error(error);

    });