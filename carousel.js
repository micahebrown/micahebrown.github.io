(function(d) {
    var itemClassName = "carousel__photo",
        items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = false;

    function setInitialClasses() {
        
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    function setEventListeners() {
        var next = d.querySelector('.carousel__button--next'),
            prev = d.querySelector('.carousel__button--prev');

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    function moveNext() {
        if (!moving) {
            if (slide === (totalItems - 1)) {
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

    function moveCarouselTo(index) {
        moving = true; 
      
        for (var i = 0; i < totalItems; i++) {
            items[i].classList.remove("prev", "active", "next");
        }
        
        items[index].classList.add("active");
        if (index === 0) {
            items[totalItems - 1].classList.add("prev");
            items[index + 1].classList.add("next");
        } else if (index === totalItems - 1) {
            items[index - 1].classList.add("prev");
            items[0].classList.add("next");
        } else {
            items[index - 1].classList.add("prev");
            items[index + 1].classList.add("next");
        }
        
        setTimeout(function() {
            moving = false;
        }, 500); 
    }


    setInitialClasses();
    setEventListeners();
})(document);

