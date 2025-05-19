
class Mushroom {

  constructor() {
    this.x = random(0,width);
  //  this.y = noise(yoff) * height; 
    this.dir = 1;
    this.img = loadImage("./assets/mushroom.png");
    this.flipped = false;
    this.yoff = random(0, 50);
    this.y;
    noiseSeed(random(5000));
  }
  show() {
    let y = noise(this.yoff+1000) * height + 200; 
    if (this.flipped) {
      push();
      scale(-1, 1);
      image(this.img, this.x, y, 32, 32);
      pop();
    } else{ image(this.img, this.x, y, 32, 32);
 }
  }
   move(){
this.x+= -2*this.dir;
this.y += 0.04;
this.yoff += 0.04;

    if (this.x < -100 ) {
      this.flipped=true;

    }
      if (this.x < -450 ) {
        
      this.flipped=false;
 this.x=width-100;
    }
   } 
 

}