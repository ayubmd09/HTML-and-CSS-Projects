// ==============================
// LIGHTBOX / MODAL IMAGE GALLERY
// one_page_website.js
// ==============================

// Start from first slide
let slideIndex = 1;

// Open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Move to next / previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Open selected image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the correct slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// ==============================
// AUTO SETUP FOR GALLERY IMAGES
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    let galleryImages = document.querySelectorAll("#gallery img");

    // Add click events to gallery images
    galleryImages.forEach(function (img, index) {
        img.addEventListener("click", function () {
            openModal();
            currentSlide(index + 1);
        });
    });

    // close modal when clicking outside image
    let modal = document.getElementById("myModal");
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // for the keyboard support
    document.addEventListener("keydown", function (event) {
        if (document.getElementById("myModal").style.display === "block") {
            if (event.key === "ArrowRight") {
                plusSlides(1);
            } else if (event.key === "ArrowLeft") {
                plusSlides(-1);
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    });
});