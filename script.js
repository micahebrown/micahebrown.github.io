function onButtonClick() {
    const image = document.createElement('img');
    image.src = 'IMG_0012.jpeg';
    document.body.appendChild(image);
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

const newButton = document.createElement('button');
newButton.textContent = 'Click this to see a GOAT';
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
    const image = document.createElement('img');
    image.src = 'IMG_0012.jpeg';
    document.body.appendChild(image);
});
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
const video = document.getElementById("video"); 
const videoThumbnail = document.getElementById("video-thumbnail"); 
const playpause = document.getElementById("play-pause"); 
const frwd = document.getElementById("skip-10"); 
const bkwrd = document.getElementById("skipminus-10"); 
const volume = document.getElementById("volume"); 
const mutebtn = document.getElementById("mute"); 
const videoContainer = document.querySelector(".video-container"); 
const controls = document.querySelector(".controls"); 
const progressBar = document.querySelector(".progress-bar"); 
const playbackline = document.querySelector(".playback-line"); 
const currentTimeRef = document.getElementById("current-time"); 
const maxDuration = document.getElementById("max-duration"); 
  
const timeFormatter = (timeInput) => { 
    let minute = Math.floor(timeInput / 60); 
    minute = minute < 10 ? "0" + minute : minute; 
    let second = Math.floor(timeInput % 60); 
    second = second < 10 ? "0" + second : second; 
    return `${minute}:${second}`; 
}; 
  
playpause.addEventListener("click", function () { 
    if (video.paused) { 
        videoThumbnail.style.display = "none"; 
        video.play(); 
        playpause.innerHTML = '<i class="fa-solid fa-pause"></i>'; 
    } else { 
        video.pause(); 
        playpause.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    } 
}); 
  
let isPlaying = false; 

function togglePlayPause() { 
    if (isPlaying) { 
        video.pause(); 
        playpause.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    } else { 
        videoThumbnail.style.display = "none"; 
        video.play(); 
        playpause.innerHTML = '<i class="fa-solid fa-pause"></i>'; 
    } 
    isPlaying = !isPlaying; 
} 
  
document.addEventListener("keydown", function (event) { 
    if (event.key === 32 || event.key === " ") { 
        event.preventDefault(); 
  
        togglePlayPause(); 
    } 
}); 
  
video.addEventListener("play", function () { 
    isPlaying = true; 
}); 
  
video.addEventListener("pause", function () { 
    isPlaying = false; 
}); 
  
video.addEventListener("ended", function () { 
    playpause.innerHTML = '<i class="fa-solid fa-play"></i>'; 
}); 
  
frwd.addEventListener("click", function () { 
    video.currentTime += 5; 
}); 
bkwrd.addEventListener("click", function () { 
    video.currentTime -= 5; 
}); 
  
mutebtn.addEventListener("click", function () { 
    if (video.muted) { 
        video.muted = false; 
        mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>'; 
        volume.value = video.volume; 
    } else { 
        video.muted = true; 
        mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; 
        volume.value = 0; 
    } 
}); 
  
document.addEventListener("keydown", function (event) { 
    if (event.key === "M" || event.key === "m") { 
        event.preventDefault(); 
        if (video.muted) { 
            video.muted = false; 
            mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>'; 
            volume.value = video.volume; 
        } else { 
            video.muted = true; 
            mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; 
            volume.value = 0; 
        } 
    } 
}); 
  
volume.addEventListener("input", function () { 
    video.volume = volume.value; 
    if (video.volume === 0) { 
        mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; 
    } else { 
        mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>'; 
    } 
}); 
  
videoContainer.addEventListener("mouseenter", () => { 
    controls.style.opacity = 1; 
}); 
  
videoContainer.addEventListener("mouseleave", () => { 
    controls.style.opacity = 0; 
}); 
   
video.addEventListener("timeupdate", () => { 
    const currentTime = video.currentTime; 
    const duration = video.duration; 
    const percentage = (currentTime / duration) * 100; 
    progressBar.style.width = percentage + "%"; 
}); 
  
function showThumbnail() { 
    videoThumbnail.style.display = "block"; 
} 
  
video.addEventListener("ended", () => { 
    progressBar.style.width = "0%"; 
    showThumbnail(); 
}); 
  
setInterval(() => { 
    currentTimeRef.innerHTML = timeFormatter(video.currentTime); 
    maxDuration.innerText = timeFormatter(video.duration); 
}, 1); 
  
playbackline.addEventListener("click", (e) => { 
    let timelineWidth = playbackline.clientWidth; 
    video.currentTime = (e.offsetX / timelineWidth) * video.duration; 
});