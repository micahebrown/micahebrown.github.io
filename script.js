function onButtonClick() {
    console.log('Button Clicked!')
    const image = document.createElement('img')

    image.src = 'IMG_1192.jpeg';

    document.body.appendChild(image);

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
}