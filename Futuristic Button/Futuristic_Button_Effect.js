const futuristic_buttons = Array.from(document.querySelectorAll(".futuristic-button"));

futuristic_buttons.forEach((button) => {
    button.addEventListener("mousemove", (event) => {
        const button_rectangle = button.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const angle = Math.atan((button_rectangle.left - mouseX) / (button_rectangle.top - mouseY));
        button.style.setProperty("--angle", angle * 360 + "deg");
    });
});