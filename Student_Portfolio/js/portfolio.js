// ================= PAGE LOAD EFFECT =================

// When the page fully loads, remove the fade-out class
// This creates a smooth fade-in effect
window.addEventListener("load", function () {
    document.body.classList.remove("fade-out");
});


// ================= SLIDESHOW SETUP =================

// Keeps track of current slide number
var slideIndex = 1;

// Show the first slide when page loads
showSlides(slideIndex);


// ================= SLIDESHOW CONTROLS =================

// Move slides forward or backward (arrow buttons)
function plusSlides(n) {
    slideIndex += n; // Increase or decrease slide index
    showSlides(slideIndex); // Show updated slide
}

// Jump directly to a specific slide (dots navigation)
function currentSlide(n) {
    slideIndex = n; // Set slide index
    showSlides(slideIndex); // Show selected slide
}


// ================= CONTACT FORM =================

// Open the contact form (display it)
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close the contact form (hide it)
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// ================= SLIDESHOW LOGIC =================

// This function controls which slide is visible
function showSlides(n) {

    // Get all slides and dots
    var slides = document.getElementsByClassName("mySlides"); 
    var dots = document.getElementsByClassName("dot"); 

    // If slide number is greater than total slides, go back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If slide number is less than 1, go to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    // Remove "active" class from all dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; 

    // Highlight the active dot
    dots[slideIndex - 1].className += " active"; 
}


// ================= AUTO CLOSE FORM =================

// This listens for clicks anywhere on the page
document.addEventListener("click", function(event){

    // Close form if:
    // 1. Click on "cancel" button
    // 2. Click outside the form
    // 3. Click not on contact button
    if (
        event.target.matches(".cancel") || 
        (
            !event.target.closest(".form-popup") && 
            !event.target.closest(".Pop_Up_Button") && 
            !event.target.closest(".contact")
        )
    ) {
        closeForm(); // Hide the form
    }

}, false);