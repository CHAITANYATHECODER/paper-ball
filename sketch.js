
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var object;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(800,670,1800,20)
object = new Ball(200,450,40)
	Engine.run(engine);

  block1 = createSprite(width/2,655,220,10)
	block1.shapeColor = "red"

	block2 = createSprite(width/2+115,625,10,70)
	block2.shapeColor = "red"

	block3 = createSprite(width/2-115,625,10,70)
	block3.shapeColor = "red"
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  object.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(object.body,object.body.position,{x:45,y:-45});


}


}



