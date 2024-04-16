document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    const images = document.querySelectorAll('.carousel__photo');
    let currentIndex = 0;

    function goToSlide(index) {
        const slideWidth = carousel.clientWidth;
        carousel.style.transform = `translateX(${-index * slideWidth}px)`;
        currentIndex = index;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            goToSlide(currentIndex + 1);
        }
    });
});
