let card = document.querySelector(".card");
let body = document.querySelector("body");
let root = document.querySelector(":root");

body.addEventListener("mousemove", handleRotation);

function handleRotation(event) {
    const maxRotation = 45;

    let x = event.clientX;
    let y = event.clientY;

    let centerX = body.clientWidth / 2;
    let centerY = body.clientHeight / 2;

    let rotationX = ((x - centerX) / centerX) * maxRotation;
    let rotationY = ((y - centerY) / centerY) * maxRotation;

    root.style.setProperty('--rotation-x', -1 * rotationY + "deg");
    root.style.setProperty('--rotation-y', rotationX + "deg");
}