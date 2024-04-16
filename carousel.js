!(function(d){
    var itemClassName = "carousel__photo";
       items = d.getElementsByClassName(itemClassName),
       totalItems =items.length,
       slide = 0,
       moving = true;
    function setInitialClasses(){
    
    
       items[totalItems - 1].classList.add("prev");
       items[0].classList.add("active");
       items[1].classList.add("next");
    }
    
    
    function setEventListeners(){
       var next= d.getElementsByClassName('carousel__button--next')[0],
       prev = d.getElementsByClassName('carousel__button--prev')[0];
    
    
       next.addEventListener('click', moveNext);
       prev.addEventListener('click', movePrev);
    }
    
    
    function moveNext() {
    
    
       if (!moving) {
    
    
           if (slide === (totalItems - 1)){
               slide = 0;
           } else {
               slide++;
           }
    
    
           moveCarouselTo(slide);
           }
       }
    
    
    function movePrev() {
    
    
       if (!moving) {
    
    
           if (slide === 0) {
               slide = (totalItems - 1);
           } else {
               slide--;
           }
    
    
           moveCarouselTo(slide);
           }
       }
    }(document));
        
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
