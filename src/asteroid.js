const MovingObject = require("./moving_object");
const Util = require("./util");

function Asteroid (pos){
    this.color = "gray";
    this.radius = 8;
    this.pos = pos;
    this.vel = 10;
    MovingObject.call(this, {color: this.color, radius: this.radius, pos: this.pos, vel: this.vel});
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;