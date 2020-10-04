class Plinko{
    constructor(x,y,r) {
        var options = {
            isStatic:true
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x = x,this.y = y,this.r = 10,options)
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