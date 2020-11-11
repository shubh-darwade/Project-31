class division
{
    constructor(x)
    {
      this.body = Bodies.rectangle(x,650,10,300,{isStatic:true});
      World.add(world,this.body);
    }
    display()
    {
       this.dpos = this.body.position;
       fill("white");
       rectMode(CENTER);
       rect(this.dpos.x,this.dpos.y,10,300);
    }
    
}