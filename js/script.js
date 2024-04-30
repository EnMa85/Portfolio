// Gets page name and assigns class 'active' to the button
$(document).ready(function(){
    // Gets the url of the current page
    var currentPath = window.location.pathname;
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    $('#menu a').each(function(){
        // Extracts the last substring of path
        var linkPath = $(this).attr('href');
        var linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1);
        
        // Assigns class 'active' to the current page button
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            $(this).addClass('active');
        }
    });
});


// Header carousel
window.addEventListener('DOMContentLoaded', function() {
  const pictures = document.querySelectorAll('.carousel picture');
  let index = 0;

  setInterval(function() {
    pictures[index].classList.remove('active');
    pictures[index].style.animation = 'hideToLeft 0.5s forwards';
    index = (index + 1) % pictures.length;
    pictures[index].classList.add('active');
    pictures[index].style.animation = 'showFromRight 0.5s forwards';
  }, 5000);
});


// Highlighted projects carousel
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.last-proj').length;

function prevSlide() {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateCarousel();
}
function nextSlide() {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateCarousel();
}
function updateCarousel() {
    const projects = document.querySelectorAll('.last-proj');
    const prevButtons = document.querySelectorAll('.prevButton');
    const nextButtons = document.querySelectorAll('.nextButton');

    // If there are no more items in the arrow direction
    // changes the opacity of the arrow button and disables the button
    prevButtons.forEach(button => {
        button.style.opacity = (currentSlide === 0) ? 0.2 : 1;  
        button.disabled = (currentSlide === 0);
    });
    nextButtons.forEach(button => {
        button.style.opacity = (currentSlide === totalSlides - 1) ? 0.2 : 1;
        button.disabled = (currentSlide === totalSlides - 1);
    });
    
    projects.forEach((proj, index) => {
        if (index === currentSlide) {
            proj.style.display = 'contents';
        } else {
            proj.style.display = 'none';
        }
    });
}
updateCarousel();