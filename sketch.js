
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall1;
var wall2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.1,
		friction: 0.1,
		density: 1
	}


	ball = Bodies.circle(150,450,10,ball_options)
    World.add(world,ball);

	ground = new Ground(400,490,800,10);
	wall1 = new Ground(500,435,10,100);
	wall2 = new Ground(630,435,10,100);

	Engine.run(engine);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  wall1.show();
  wall2.show();
  ellipse(ball.position.x, ball.position.y, 10);

  if(keyIsDown(UP_ARROW)){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.5});
   }

   if(keyIsDown(RIGHT_ARROW)){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.5, y:0});
   }

   if(keyIsDown(LEFT_ARROW)){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.5, y:0});
   }

   fill(0, 102, 153, 51);
   textSize(32);
   text("Pressione as setas para mover a bola", 130,50);

   fill(0, 102, 153, 51);
   textSize(32);
   text("Obs: Ela quica muito", 127,100)

  drawSprites();
}



