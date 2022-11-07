

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;


document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");
    ctx.fillRect(0, 0, 500, 500);
});