const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4,moon,moon_img;

var engine, world;
var drops = [];
var rand,umbrella_img,batman,moon,bg;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    umbrella_img= loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    moon_img = loadImage("images/moon.png");
    bg = loadImage("images/bg.gif");
}


function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,625);
    umbrella = new Umbrella(200,350,50);
    
    moon = createSprite(75,75);
    moon.addImage("moon",moon_img);
    moon.scale= 0.5;
    
    batman = createSprite(200,450);
    batman.addAnimation("walking",umbrella_img);
    batman.scale= 0.45;

    //creating drops
    
    
}

function draw(){
    Engine.update(engine);
    background(bg); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.5,1)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    
    drawSprites();
}   