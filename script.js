// ===============================
// HERO SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}

if (slides.length > 0) {
    setInterval(showSlide, 3000);
}
// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    // Open / Close menu
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle("open");
    });

    // Close when clicking anywhere else
    document.addEventListener("click", (e) => {
        if (
            !mobileMenu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            mobileMenu.classList.remove("open");
        }
    });

    // Close when a menu item is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });

    // Close when user scrolls
    window.addEventListener("scroll", () => {
        mobileMenu.classList.remove("open");
    });

}

// ===============================
// STICKY NAVBAR
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
