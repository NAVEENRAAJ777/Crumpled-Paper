
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new crumpledpaper(200,200);
	ground = new Ground(600,height,1200,20)

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.diaplay();
  ground.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keycode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position{x:250,y:-250})
	}
}



