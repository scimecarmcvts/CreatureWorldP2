
/**
Gabriel Arias
6/8/25
Creature Lab
**/
function preload() {
 //sound = loadSound('./assets/buzz.mp3');
}
class Mushroom {

  constructor() {
    this.dir = 1;
    this.img = loadImage("./assets/mushroom.png");
    this.flipped = false;
    this.yoff = random(0, 50);
    this.position = createVector(100, 100);
    this.velocity = createVector(10, 15);
    this.acceleration = createVector(0.1, 0.1);
    this.buzz = sound;
    noiseSeed(random(5000));
  }
  
  show() {
      image(this.img, this.position.add(this.velocity).x, this.position.add(this.velocity).y, 32, 32);
  }
   move(){
this.velocity.add(this.acceleration);
this.position.x = noise(this.yoff+999) * height + 200; 
this.position.y = noise(this.yoff+1000) * height + 200; 
this.position.x += -2*this.dir;
this.position.y += 0.04;
this.yoff += 0.04;
this.velocity.limit(random(0,8));
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
      this.acceleration *= -0.1;
      this.velocity.add(this.acceleration);
    }

    if (this.position.y > height || this.position.y  < 0) {
      this.velocity.y *= -1;
      this.acceleration *= -0.1;
      this.velocity.add(this.acceleration);
    }


    
  }
   } 
 
function mousePressed(){
 // sound.play();
}
