// Get the button 
const menuBtn= document.getElementById("menu-btn")

// getting the mobile enu 
const mobileMenu = document.getElementById("mobile-menu")
if (menuBtn && mobileMenu) { 
// when the button is clicked .....
menuBtn.addEventListener("click", function() {
    // if Menu is hidden,show it.
    //if Menu is showing,hide it.

    mobileMenu.classList.toggle("hidden");

    // make the menu display vertically
    mobileMenu.classList.toggle("flex")
});
}


// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.classList.remove("hidden");
        } else {
            topBtn.classList.add("hidden");
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// HERO SLIDER USING FETCH API


const heroSlider = document.getElementById("hero-slider");

if (heroSlider) {

    fetch("data/gallery.json")
        .then(response => response.json())
        .then(data => {

            const heroImages = data.slice(0, 5);

            heroImages.forEach(photo => {

                const img = document.createElement("img");

                img.src = photo.image;
                img.alt = photo.title;
                img.className =
                    "absolute inset-0 w-full h-full object-cover";

                heroSlider.appendChild(img);

            });

        });

}
// WILDLIFE GALLERY


const wildlifeGallery = document.getElementById("wildlife-gallery");

if (wildlifeGallery) {

    fetch("data/gallery.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load gallery.json");
            }
            return response.json();
        })

        .then(data => {

            // Get only wildlife photos (works for Wildlife, wildlife, WILDLIFE...)
            const wildlife = data.filter(photo =>
                photo.category.toLowerCase() === "wildlife"
            );

            wildlife.forEach(photo => {

                wildlifeGallery.innerHTML += `
                    <div class="relative group overflow-hidden rounded-3xl">

                        <img
                            src="${photo.image}"
                            alt="${photo.title}"
                            class="rounded-3xl h-[400px] w-full object-cover hover:scale-105 transition duration-500">

                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>

                        <div class="absolute bottom-0 left-0 w-full p-5
                            translate-y-full group-hover:translate-y-0
                            transition duration-500
                            bg-gradient-to-t from-black/90 to-transparent">

                            <h3 class="text-xl font-bold text-yellow-400">
                                ${photo.title}
                            </h3>

                            <p class="text-gray-300 text-sm">
                                ${photo.description || ""}
                            </p>

                        </div>

                    </div>
                `;

            });

        })

        .catch(error => console.error(error));

}