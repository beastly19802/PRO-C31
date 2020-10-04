class Particle{
    constructor(x,y,r,color) {
        this.x = x
        this.y = y
        this.r = r
        this.color = color
        options = {
            density:1.0,
            friction:0.2
        }
        this.body = Bodies.circle(this.x = x,this.y = y,this.r,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display() {
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}