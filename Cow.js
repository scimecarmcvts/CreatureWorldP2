/**
Younes Bakir
June 4, 2025
Creature Lab Vector Update
Extra: Cow moos
**/

function preload() {
cowSound = loadSound('./assets/moo.mp3');
}

class Cow {
  constructor() {
    //Constructing x,y and other vars like movement
    noSmooth();
    this.pos = createVector(random(0, width), random(300, height));
    this.acc = createVector(0.1, 0.1);
    this.vel = createVector(3, 3);
    this.img = loadImage("./assets/mooshroomL.png");
    this.imgMirror = loadImage("./assets/mooshroom.png");
    this.left = random(0, -100);
    this.right = random(0, 100);
    this.time = random(0, 75);
    this.timeInc = 0.01;
    this.sound = cowSound;
    this.startTime = millis();
    this.lastMoo = 0;
  }
  move() {
    //Movement control
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.pos.add(this.vel);

    //Both of these conditionals will respawn the cow if they go off screen
    if (this.pos.x > 2400) {
      this.pos.x = 0;
    }

    if (this.pos.y > 1350) {
      this.pos.y = random(350, 700);
    }
  }
  show() {
    //Declares a choice variable which decides if the image goes left/right
    let choice = noise(this.time);
    if (choice < 0.5) {
      //Mirror image if going right
      image(this.imgMirror, this.pos.x, this.pos.y, 96, 96);
      this.pos.x++;
    } else {
      //Show original image if going left
      image(this.img, this.pos.x, this.pos.y, 96, 96);
      this.pos.x--;
    }

    //Plays sound every 5 second
    if (millis() - this.lastMoo > 5000) {
    this.sound.play();
    }

    //Allows the creature to move by incrementing time
    this.time += this.timeInc;
  }
}
