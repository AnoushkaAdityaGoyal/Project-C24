class Paper {
    constructor(x, y, r) {

        var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.x=x;
        this.y=y;
        this.r=r;

        this.body = Bodies.circle(this.x, this.y, this.r/2 ,options);
        World.add(world, this.body);
        }

    display() {

        var paperpos = this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        stroke(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    
    update() {

        if (keyWentDown("UP_ARROW")) {
            Matter.Body.applyForce(this.body, this.body.position, { x: 75, y:-75});
        }
    }
}

