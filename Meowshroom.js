class Meowshroom {
  constructor() {
    this.frame0 = loadImage('./assets/frame0.png');
    this.frame1 = loadImage('./assets/frame1.png');
    this.frame2 = loadImage('./assets/frame2.png');
    this.frame3 = loadImage('./assets/frame3.png');
    this.frame4 = loadImage('./assets/frame4.png');
    this.curFrame = 0;
    this.posX = random(0, width);
    this.posY = random(height, height/2);
    this.wagging = false;
    this.initFrame = 0;
    this.walking = false;
    this.walkingFrame = 0;
    this.direction = 0;
    this.speed = 2;
    this.yFrame = 0;
    this.walkRepeats = 0;
    this.oldX = 0;
    this.oldY = 0;
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
  //have to find a different solution because p5js doesn't like recursion
  move() {
    if (!this.walking && frameCount%60==0) {
      let chance = noise(this.walkingFrame);
      this.walkingFrame++;
      if (chance > 1/1.5) {
        this.walking = true;
        this.walk();
      } else {
        this.walking = false;
      }
    }
  }
  //I'll add a cool tp animation later
  walk() {
    this.posX = random(0 + 48, width - 48);
    this.posY = random(height - 32, height/2);
    this.walking = false;
  }
  show() {
    imageMode(CENTER);
    noSmooth();
    let frameArray = [this.frame0, this.frame1, this.frame2, this.frame3, this.frame4];
    image(frameArray[this.curFrame], this.posX, this.posY, 32, 48); 
    this.tailWag();
  }
}