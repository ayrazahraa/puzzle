const outerCircle = document.getElementById('outerCircle');
const innerCircle = document.getElementById('innerCircle');
const rotateLeftBtn = document.getElementById('rotateLeft');
const rotateRightBtn = document.getElementById('rotateRight');

let outerRotation = 0;
let innerRotation = 0;

rotateLeftBtn.addEventListener('click', () => {
    outerRotation -= 30;
    outerCircle.style.transform = `rotate(${outerRotation}deg)`;
});

rotateRightBtn.addEventListener('click', () => {
    innerRotation += 30;
    innerCircle.style.transform = `rotate(${innerRotation}deg)`;
});
