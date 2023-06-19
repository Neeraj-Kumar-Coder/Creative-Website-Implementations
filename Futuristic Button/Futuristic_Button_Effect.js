const futuristic_buttons = Array.from(document.querySelectorAll(".futuristic-button"));

futuristic_buttons.forEach((button) => {
    button.addEventListener("mousemove", (event) => {
        const button_rectangle = button.getBoundingClientRect();
        const mouseX = event.clientX;
        button.style.setProperty("--angle", (mouseX - button_rectangle.left) + "deg");
    });
});