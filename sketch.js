let creatures = [];
let numCr = 5;
let w;

function setup() {
  createCanvas(2400, 1350);
  // createCanvas(600, 400);
  
  // console.log("Hello Class!");

  let startY = height/4 + 20;
  let endY = height - 100;
  // let yInc = (startY - endY) / treeCount;

  
  let sizeT = 3;
  let sizeMin = 0.5;
  // let sizeInc = ( size - sizeMin ) / treeCount;

for (let j = 0; j < 5; j++){
  for(let i = 0; i < width; i += 70 + j * 10){
    creatures.push(new Tree(1 + j * 0.2, 
      i + random(-4 * j, 4 * j) + j * 10, 
      startY + random(2 * j, 20 * j) + j * 120));
  }
}

  for(let i = 0; i < numCr; i++){
    creatures.push(new MushroomAni());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Mouse2());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Creeper());
  }
  
  for(let i = 0; i < numCr; i++){
    creatures.push(new Creature());
  }
  
  for(let i = 0; i < numCr; i++){
    creatures.push(new Worm());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Mouse(random(width), random(height/4, height)));
  }
  
  for(let i = 0; i < numCr; i++){
    creatures.push(new Mushroom());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new PumpkinShroom());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Cow());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Skel());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Meowshroom());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Bug());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Bfly());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Plant());
  }
  
  for(let i = 0; i < numCr; i++){
    creatures.push(new Ghost());
  }
  

    for(let i = 0; i < numCr; i++){
    creatures.push(new Campfire());
  }
  
  creatures.push(new Cat());
  
  w = new World();
}

function draw() {
  background(220);
  
  w.show();
  
  for (let i = 0; i < creatures.length; i++){
    creatures[i].move();
    creatures[i].show();
  }
  
}

class World {
  constructor() {
    //Noise Variables
    this.nt = 0;
    this.ntWaves = 100;
    this.noiseSpeed = 0.002;

    
  }

  show() {
    background("rgb(65,20,65)");

    //Moon
    let startRadius = 250;
    let startAlph = 155;
    let strokeAlph = startAlph;
    let numCir = 6;
    let cirDist = 50;
    
    
    noFill();
    strokeWeight(25);
    
    for (let i = 0; i < numCir; i++){
      
      stroke(248,236,192, strokeAlph);
      ellipse(width * 0.66, height / 4, startRadius + i * cirDist, startRadius + i * cirDist);
    
      strokeAlph -= startAlph/numCir;
    }
    
    
    noStroke();
    fill("rgb(255,225,117)4)");
    ellipse(width * 0.66, height / 4, 250, 250);

    //Horizon
    let startHorizonY = height / 4;
    let lightVal = 1;
    let currentNt = this.nt;
    for (let j = 0; j < 3; j++) {
      fill(58 * lightVal, 37 * lightVal, 83 * lightVal);
      beginShape();
      vertex(0, height);
      for (let i = 0; i < width + 10; i += 1) {
        vertex(i, startHorizonY + noise(currentNt + i * this.noiseSpeed) * 50);
      }
      vertex(width, height);
      endShape();
      //this.nt += this.noiseSpeed;
      startHorizonY += 150;
      lightVal -= 0.1;
      currentNt += 1000;
    }
    

    this.drawText();
  }

  drawText() {
    noStroke();
    fill(255);
    textSize(25);
    text("Haunted Mooshroom Forest", 50, 50);
  }
  
  
}

class Creature {
  constructor() {
    this.position = createVector(random(0, width), random(height/2, height) );
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0, 0);
    this.display = true;
    this.sizeC = 1;
    this.img = loadImage("sprite1.png");
    this.nt = random(1000);
    this.noiseSpeed = 0.02;
  }
  show() {
    image(this.img, this.position.x, this.position.y);
  }
  move() {
    let choice = noise(this.nt);
    if (choice < 0.5){
      this.acceleration.x = 0.1;
    } else{
      this.acceleration.x = -0.1;
    }
    this.nt += this.noiseSpeed;

    this.velocity.add(this.acceleration);
    this.velocity.limit(4);
    this.position.add(this.velocity);

    if (this.position.x < 0){
      this.position.x = width;
    }
    if (this.position.x > width){
      this.position.x = 0;
    }
  }
  
  
}

function keyPressed(){
  
  console.log(width + ", " + height);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}