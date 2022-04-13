const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box2 = new Box(500,310,70,70);
    box1 = new Box(500,300,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(575,300,70,70);
    box4 = new Box(575,300,70,70);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(645,160,70,70);
    box6 = new Box(645,230,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200, 50);

    ground2 = new Ground(1000,100,240,20);
    box7 = new Box(940,60,70,70);
    box8 = new Box(925,40,70,70);
    box9 = new Box(925,20,70,70);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new SlingShot(bird.body,{x:200, y:50});


}

function draw(){
    Text("SCORE :"+ScreenOrientation, 750, 40);
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //log1.display();

    box3.display();
    box4.display();
    //pig3.display();
    //log3.display();

    box5.display();
    box6.display();
    //log4.display();
    //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    ground2.display();  
    box7.display(); 
    box8.display();
    //box9.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode===32){
    slingShot.attach(bird.body)
    
    }
}