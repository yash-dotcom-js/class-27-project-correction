class Bob {
    constructor(x, y, radius) {
         var options = {
            restitution:0.5,
            friction:0.3,
            density:0.1
         }
         
        this.body=Bodies.circle(x,y, radius, options);
        World.add(engine.world, this.body);
        this.radius = radius;
        this.image=loadImage("eye.png");
    
    }
    display() {
        imageMode(CENTER);
        image(
            this.image,
            this.body.position.x,
            this.body.position.y,
            this.radius*2,
            this.radius*2
        )
    }
}