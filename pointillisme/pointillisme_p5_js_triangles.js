let img;
let smallPoint, largePoint;

function preload() {
 // img = loadImage('data/kitten.jpg');
  img = loadImage('https://raw.githubusercontent.com/Atchoumdev/data/4ee92a6a4c28b5d3ffc6bb74b3fa27f411e29eb4/pointillisme/data/kitten.jpg');
}

function setup() {
  createCanvas(512, 512);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, img.width, smallPoint, largePoint, largePoint);

  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  let R1 = pix[0];
  let G1 = pix[1];
  let B1 = pix[2];
  fill(R1, G1, B1 , 128);

    
    let X1 = x;
    let Y1 = y;
    let X2 = floor(x - (pointillize /2));
    let Y2 = floor(y - pointillize) ;
    let X3 = floor(x + (pointillize /2));
    let Y3 = floor(y - pointillize) ;
        
    triangle(random(X1,X2), random(Y1,Y2), random(X3,X2), random(Y3,Y2), random(X1,X3), random(Y1,Y3));
}
