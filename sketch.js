let creatures = [];
let numCr = 5;
let w;

function setup() {
  createCanvas(2400, 1350);
  // createCanvas(600, 400);
  
  console.log("Hello Class!");
    
  for(let i = 0; i < 50; i++){
    creatures.push(new Tree());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new MushroomAni());
  }
  for(let i = 0; i < numCr; i++){
    creatures.push(new Mouse2());
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
  
  creatures.push(new Cat());
  
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
    
    this.treeNoise = 1000;
    this.treeNoiseSpeed = 0.02;
    
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
    
    
    //this.drawTrees();

    this.drawText();
  }

  drawText() {
    noStroke();
    fill(255);
    textSize(25);
    text("Haunted Mooshroom Forest", 50, 50);
  }
  
  drawTrees(){
    //walker 
    randomSeed(101);
    this.treeNoise = 1000;
    
    let x = random(width);
    let y = random(height/3, height/2);
    let speed = 5;
    
    for (let i = 0; i < 5000; i++){
      let lightVal = noise(this.treeNoise);
      stroke(45 * lightVal, 100 * lightVal, 45 * lightVal);
      strokeWeight(random(2,12));
      point(x, y);
      let choice = random();
      if (choice < 0.2){
        y-= speed;
      } else if (choice < 0.4){
        y+= speed;
      } else if (choice < 0.6){
        x-= speed;
      } else{
        x+= speed;
      }
      
      if (x > width){
        x = 0;
      }
      this.treeNoise += this.treeNoiseSpeed;
    }
    
  }
}

class Creature {
  constructor() {
    this.x = random(0, width);
    this.y = random(height/2, height);
    this.display = true;
    this.size = 1;
    this.img = loadImage("sprite1.png");
    this.nt = random(1000);
    this.noiseSpeed = 0.02;
  }
  show() {
    image(this.img, this.x, this.y);
  }
  move() {
    let choice = noise(this.nt);
    if (choice < 0.5){
      this.x++;
    } else{
      this.x--;
    }
    this.nt += this.noiseSpeed;
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