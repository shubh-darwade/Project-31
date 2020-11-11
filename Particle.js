class particle
{
    constructor(x,y,colour)
    {
        this.body = Bodies.circle(x,y,10,{friction:0});
       this.colour=colour;
        World.add(world,this.body);
    }
    display()
    {
        fill(this.colour);
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,20,20)
    }
}