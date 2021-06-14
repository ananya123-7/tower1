const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img, background_img;
function preload(){
  polygon_img=loadImage("polygon.png");
  background_img=loadImage("p222.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//Second Tower level one 
block_a1 = new Block(600,175,30,40);
block_a2 = new Block(630,175,30,40);
block_a3 = new Block(660,175,30,40);
block_a4 = new Block(690,175,30,40);
block_a5 = new Block(720,175,30,40);
block_a6 = new Block(750,175,30,40);
block_a7 = new Block(780,175,30,40);
//Second Tower level two
block_a8 = new Block(630,135,30,40);
block_a9 = new Block(660,135,30,40);
block_a10 = new Block(690,135,30,40);
block_a11 = new Block(720,135,30,40);
block_a12 = new Block(750,135,30,40);
//Second Tower level three
block_a13 = new Block(660,95,30,40);
block_a14 = new Block(690,95,30,40);
block_a15 = new Block(720,95,30,40);
//Second Tower top
block_a16 = new Block(690,55,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingshot = new SlingShot(this.polygon,{x:100,y:200});

}
function draw() {
  background(background_img); 
 
  textSize(15);
  fill("orange");
  text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks",200,20);

  ground.display();
  stand1.display();
  stand2.display();
// 1st Tower
  strokeWeight(2);
  stroke(15);
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("magenta");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("lightgreen");
  block16.display();
// 2nd Tower
 fill("yellow");
  block_a1.display();
  block_a2.display();
  block_a3.display();
  block_a4.display();
  block_a5.display();
  block_a6.display();
  block_a7.display();
  fill("magenta");
  block_a8.display();
  block_a9.display();
  block_a10.display();
  block_a11.display();
  block_a12.display();
  fill("turquoise");
  block_a13.display();
  block_a14.display();
  block_a15.display();
  fill("lightgreen");
  block_a16.display();

  imageMode (CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
 
}