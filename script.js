function onButtonClick() {
    
    const image = document.createElement('img')

    image.src = 'IMG_1192.jpeg';

    document.body.appendChild(image);
}

const button = document.querySelector('buttin');
button.addEventListener('click', onButtonClick);