class plinko
{
    constructor(x,y)
    {
        this.body = Bodies.circle(x,y,10,{isStatic:true,friction:0});
       
        World.add(world,this.body);
    }
    display()
    {
        fill("white");
        var ppos=this.body.position;
        ellipseMode(CENTER);
        ellipse(ppos.x,ppos.y,20,20)
    }
}