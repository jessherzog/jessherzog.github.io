var NW;
var SE;

function preload() {
  NW = loadImage("assets/dude.gif");
  SE = loadImage("assets/fleur.gif");
}

function setup() {
  createCanvas(300, 400);
}

function draw() {
  rect(0, 320, width, 200);
  image(NW, 100, 300, NW.width/2, NW.height/2);
  imageMode(CENTER);
  image(SE, random(300), random(300), random(SE.width), random(SE.height));
}