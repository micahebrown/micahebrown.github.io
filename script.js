function onButtonClick() {
    const image = document.createElement('img');
    image.src = 'IMG_0012.jpeg';
    document.body.appendChild(image);
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
