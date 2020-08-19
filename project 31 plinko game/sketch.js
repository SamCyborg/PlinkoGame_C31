const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,divisionG;
var divisionHeight = 335;

var particles = [];
var plinkos = [];

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,25)
  divisionG = new Division(240,770,480,18);

  //Sorry ma'am I forgot to use the for loop to create the divisions !!!
  //But I can assure you that I know its usage :)
  division1 = new Division(5,600,12,divisionHeight);
  division2 = new Division(85,600,12,divisionHeight);
  division3 = new Division(165,600,12,divisionHeight);
  division4 = new Division(245,600,12,divisionHeight);
  division5 = new Division(325,600,12,divisionHeight); 
  division6 = new Division(405,600,12,divisionHeight);
  division7 = new Division(475,600,12,divisionHeight);


  //creating plinkos
  for(var x1=40 ; x1<=width ; x1=x1+100){
    plinkos.push(new Plinko(x1,70));
  }
  for(var x2=10 ; x2<=width ; x2=x2+100){
    plinkos.push(new Plinko(x2,150));
  }
  for(var x3=40 ; x3<=width ; x3=x3+100){
    plinkos.push(new Plinko(x3,230));
  }
  for(var x4=10 ; x4<=width ; x4=x4+100){
    plinkos.push(new Plinko(x4,310));
  }

}

function draw() {
  background(60,60,60);
  Engine.update(engine);
  ground.display();
  divisionG.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

   //creating particles
    if(frameCount % 90 === 0){
        particles.push(new Particle(random(width/2 - 10, width/2 + 10),10));
    }

   for(var jt = 0; jt < plinkos.length; jt++){
        plinkos[jt].display();
  }
   for(var s = 0; s < particles.length; s++){
        particles[s].display();
   }

  
  drawSprites();
}