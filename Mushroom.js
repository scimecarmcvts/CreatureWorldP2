
class Mushroom {

  constructor() {
    this.x = random(0,width);
  //  this.y = noise(yoff) * height; 
    this.dir = 1;
    this.img = loadImage("./assets/mushroom.png");
    this.flipped = false;
    this.yoff = random(0, 50);
    this.y;
    this.position = createVector(100, 100);

    noiseSeed(random(5000));
  }
  show() {
    this.position.x = noise(this.yoff+999) * height + 200; 
    this.position.y = noise(this.yoff+1000) * height + 200; 
    if (this.flipped) {
      push();
      scale(-1, 1);
      image(this.img, this.position.x, this.position.y, 32, 32);
      pop();
    } else{ image(this.img, this.position.x, this.position.y, 32, 32);
 }
  }
   move(){

this.position.x+= -2*this.dir;
this.position.y += 0.04;
this.yoff += 0.04;

    if (this.position.x < -400 ) {
      this.flipped=true;

    }
      if (this.position.x < -750 ) {
        
      this.flipped=false;
 this.position.x=width-100;
    }
   } 
 

}