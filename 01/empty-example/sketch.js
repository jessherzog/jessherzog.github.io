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
  noStroke();
  fill(158, 212, 144);
  rect(0, 320, width, 200);
  image(NW, 100, 200, NW.width/2, NW.height/2);
  image(SE, random(300), random(300), random(SE.width), random(SE.height));
}