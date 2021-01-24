var engine;
var myWorld;
var stars;

function setup() {
  createCanvas(800,400);

// create a engine
  engine = Matter.Engine.create();

//create a world
  myWorld = engine.world;

//create a star
  stars = Matter.Body;

// create a physical body 
  star = Matter.Bodies.rectangle(400,200,50,13);

  //adding bodies to world
Matter.World.add(myWorld,stars);


}

function draw() {
  background("black");
  
  


//rectMode(CENTRE);
rect(star.position.x,star.position.y,50,13);
}