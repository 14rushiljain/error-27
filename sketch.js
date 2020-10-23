
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1;
var base;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = createSprite(200,100,100,20);
	bob1 = new Bob(200,200,20,20);
    
	chain = new Rope(bob1.body, base.body);
   
}


function draw() {
	background(0);
	Engine.run(engine);
    rectMode(CENTER);
   
	bob1.display();
	base.display();
	chain.display();
  
  
 
}



