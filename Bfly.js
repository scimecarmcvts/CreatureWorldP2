// Name: Ina Lazeva
// Date: June 5th, 2025
// Class: Intro to Java
// Assignment: Creature Lab 1.1 (Vector Update)
// Extra: to have the butterflies move from one side of the screen to the other using mouseDragged() which is a function that is called when the mouse move while 
class Bfly {
  constructor() {
  // position, velocity, acceleration
  this.position = createVector(width / 2, height / 2);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);


  // display image 
  this.display = true;
  this.img = loadImage('./assets/bfly.png');
  this.noiseStart = random(1000);
  this.noiseInc = 0.02;
  this.position.ySpeed = 1; // speed of up/down motion
  this.position.yDirection = 1; // direction: 1 = down, -1 = up

  // use of p5js mouseDragged 
  this.dragging = false;
  this.dragOffset = createVector(0,0); 
}

move() {
  if (!this.dragging) {
    // force noiseX to be able to 
      //t noiseForceX = map(noise(this.noiseStart 
      this.acceleration.x = noiseForceX;
      this.noiseStart += this.noiseInc;
  }

  // move x: (side-to-side motion)
  this.position.x = noise(this.noiseStart) * width/4;
  this.noiseStart += this.noiseInc;

  // move y: up and down 
  this.position.y += this.position.ySpeed * this.position.yDirection;

  // if butterfly hits top or bottom chadge direction
  if (this.position.y > height / 2 + 35 || this.position.y < height / 2 - 40) {
  this.position.yDirection *= -1;
}
  this.velocity.add(this.acceleration);
  this.velocity.limit(2);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

show() {
  imageMode(CENTER);
  image(this.img, this.position.x, this.position.y);
}

mousePressed() {
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d < 50) { // if mouse is close to the butterfly
      this.dragging = true;
      this.dragOffset.set(this.position.x - mouseX, this.position.y - mouseY);
    }
  }
mouseDragged() {
   if (this.dragging) {
     this.position.set(mouseX + this.dragOffset.x, mouseY + this.dragOffset.y);
    }
// when mouse released the dragging should appear to stop 
mouseReleased() 
  this.dragging = false; 
}
}


