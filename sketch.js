const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var icon1,icon2,icon3,icon4,icon5;
var plinkos = [];
var divisions = [];
var particles = [];
var b =0;
var a=0,c;
var ground;

var color;

function setup() {
  createCanvas(520,800);
  
  engine = Engine.create();
  world = engine.world;
  
 

 icon1 = createSprite(50,150,75,30);
 icon1.shapeColor="red";

 icon2 = createSprite(150,150,75,30);
 icon2.shapeColor="blue";

 icon3 = createSprite(250,150,75,30);
 icon3.shapeColor="green";

 icon4 = createSprite(350,150,75,30);
 icon4.shapeColor="yellow";

 icon5 = createSprite(450,150,75,30);
 icon5.shapeColor="pink";

 ground = new Ground(260,700,520,20);
  Engine.run(engine);
}

function draw() {
  background("black");  
  fill("white");
  rectMode(CENTER);
  ground.display();

  for (var j = 40;j <=width; j = j+50 )
  {
    plinkos.push(new plinko(j,250));
  }

  for (var j = 15;j <=width-10; j = j+50)
  {
    plinkos.push(new plinko(j,300));
  }

  for (var j = 40;j <=width; j = j+50)
  {
    plinkos.push(new plinko(j,350));
  }

  for (var j = 15;j <=width-10; j = j+50)
  {
    plinkos.push(new plinko(j,400));
  }

  for (var i=0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }
   
  for (var j = 0;j <=width; j = j+100)
  {
    divisions.push(new division(j,650));
  }

  for (var i=0; i < divisions.length; i++)
  {
    divisions[i].display();
  }
  
  drawSprites();
mousepressed();



 if(b ==! 0 && frameCount % 10 == 0)
{
    particles.push(new particle(a,0,color));
}
for (var i=0; i < particles.length; i++)
  {
    particles[i].display();
  }
}
function mousepressed()
{
  if(mousePressedOver(icon1))
  {
    b=1;
    a=50;
    color="red";
    icon1.visible=false;
icon2.visible=false;
icon3.visible=false;
icon4.visible=false;
icon5.visible=false;
}

if(mousePressedOver(icon2))
  {
    b=1;
    a=150;
    color="blue";
    icon1.visible=false;
icon2.visible=false;
icon3.visible=false;
icon4.visible=false;
icon5.visible=false;
  }

  if(mousePressedOver(icon3))
  {
    b=1;
    a=250;
    color="green";
    icon1.visible=false;
icon2.visible=false;
icon3.visible=false;
icon4.visible=false;
icon5.visible=false;
  }

  if(mousePressedOver(icon4))
  {
    b=1;
    a=350;
    color="yellow";
    icon1.visible=false;
icon2.visible=false;
icon3.visible=false;
icon4.visible=false;
icon5.visible=false;
  }

  if(mousePressedOver(icon5))
  {
    b=1;
    a=450;
    color="pink";
    icon1.visible=false;
icon2.visible=false;
icon3.visible=false;
icon4.visible=false;
icon5.visible=false;
  }
}