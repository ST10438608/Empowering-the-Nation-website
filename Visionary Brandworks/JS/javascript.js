document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideWrapper = document.querySelector('.slide-wrapper');

    function showSlide(index) {
        const offset = -index * 100; 
        slideWrapper.style.transform = `translateX(${offset}%)`;
    }

    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; 
        showSlide(currentIndex);
    }

    
    function previousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
        showSlide(currentIndex);
    }

    
    showSlide(currentIndex);
    
    
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', previousSlide);
    
    
    setInterval(nextSlide, 3000);
});
