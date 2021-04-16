


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events  = Matter.Events;
const Render = Matter.Render;
const MouseConstraint = Matter.MouseConstraint;
const Body = Matter.Body;
const Common = Matter.Common;
const Plugin = Matter.Plugin;
const Runner = Matter.Runner;
const Composite = Matter.Composite;
const Composites = Matter.Composites;


var canvas,engine,world;

//load images,sounds,fonts,etc. in preload(){} .
function preload() {
    
}

//create bodies and/or sprites in setup(){} .
function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;


   
}

//all if conditions and events like isTouching() are called in draw(){} .
function draw(){
   background(0);
    Engine.update(engine);

     
    
}


//functions mouseDragged,mouseReleased,mousePressed,draw,preload, and setup do not need to
//be called because they are already defined and called in the p5.play library. 

function mouseDragged() {

}

function mouseReleased() {

}

function mousePressed() {

}












