const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

var divisionHeight = 300

var plinkos = []
var particles = []
var divisions = []


var ground

function setup() {
  createCanvas(480,800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(240,790,480,20)
  for (var k; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display()
  divisions.display()
}