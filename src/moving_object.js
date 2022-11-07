function MovingObject(object){
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
};

module.exports = MovingObject;

MovingObject.prototype.draw = function (ctx){
    

    document.addEventListener("DOMContentLoaded", function() {
        const canvasEl = document.getElementById("canvas");
        canvasEl.width = 500;
        canvasEl.height = 500;

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 30;
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
};