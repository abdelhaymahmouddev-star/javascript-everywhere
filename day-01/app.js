const message = document.getElementById("message");
const changeTextBtn = document.getElementById("changeTextBtn");
const consoleBtn = document.getElementById("consoleBtn");

changeTextBtn.addEventListener("click", function () {
    message.textContent = "The text has been changed!";
});

consoleBtn.addEventListener("click", function () {
    console.log("The console button was clicked!");
});