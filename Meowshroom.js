class Meowshroom {
  constructor() {
    this.frame0 = loadImage('./assets/frame0.png');
    this.frame1 = loadImage('./assets/frame1.png');
    this.frame2 = loadImage('./assets/frame2.png');
    this.frame3 = loadImage('./assets/frame3.png');
    this.frame4 = loadImage('./assets/frame4.png');
    this.directions = createVector(-1, 1);
    this.curFrame = 0;
    this.position = createVector(random(0, width), random(height, height/2));
    this.wagging = false;
    this.initFrame = 0;
    this.walking = false;
    this.walkingFrame = 0;
    this.flipped = false;
    this.direction = 0;
    this.speed = 2;
    this.velLimit = 2.5;
    this.maxVel = 0.8;
    this.minVel = 0.25;
    this.yFrame = 0;
    this.walkRepeats = 0;
    this.oldX = 0;
    this.oldY = 0;
    this.velocity = createVector(0, 0);
  }
  tailWag() {
    let chance = random(5);
    if (chance < 2 && !this.wagging && !this.walking && frameCount%5==0) {
      if (this.curFrame < 2) {
        this.curFrame++;
      } else {
        this.curFrame = 0;
      }
    }
  }
  velMove() {
    this.velocity.limit(this.velLimit);
    this.velocity.limit(-this.velLimit);
    if (this.position.x > 48 && this.position.x < width - 48) {
      this.position.x += this.velocity.x;
    }
    if (this.position.y > 300 && this.position.y < height - 32) {
      this.position.y += this.velocity.y;
    }
    if (this.directions.x == 1) {
      this.velocity.x = random(this.minVel, this.maxVel);
      this.flipped = false
    } else {
      this.velocity.x = random(-this.minVel, -this.maxVel);
      this.flipped = true
    }
    if (this.directions.y == 1) {
      this.velocity.y = random(this.minVel, this.maxVel);
    } else {
      this.velocity.y = random(-this.minVel, -this.maxVel);
    }
  }
  //have to find a different solution because p5js doesn't like recursion
  move() {
    this.velMove();
    if (!this.walking && frameCount%60==0) {
      let chance = noise(this.walkingFrame);
      this.walkingFrame++;
      if (chance > 1/1.5) {
        this.walking = true;
        this.walk();
        this.velocity = createVector(0, 0);
        this.directions = createVector(round(random(0, 1)), round(random(0, 1)))
        console.log(this.directions);
      } else {
        this.walking = false;
      }
    }
  }
  walk() {
    this.position.x = random(0 + 48, width - 48);
    this.position.y = random(height - 32, height/2);
    this.walking = false;
  }
  show() {
    imageMode(CENTER);
    noSmooth();
    let frameArray = [this.frame0, this.frame1, this.frame2, this.frame3, this.frame4];
    if (this.flipped) {
      push();
      translate(width, 0);
      scale(-1, 1);
      image(frameArray[this.curFrame], width - this.position.x, this.position.y, 32, 48);
      pop();
    } else {
      image(frameArray[this.curFrame], this.position.x, this.position.y, 32, 48);
    }  
    this.tailWag();
  }
  
}