const MovingObject = require("./moving_object");

function Asteroid (pos){
    Util.inherits(Asteroid, MovingObject);
    this.color = "gray";
    this.radius = 8;
    this.pos = pos;
}