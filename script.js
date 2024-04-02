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