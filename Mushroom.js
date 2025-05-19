
class Mushroom {
  constructor() {
    this.x = width / 2;
  //  this.y = noise(yoff) * height; 
    this.dir = 1;
    this.img = loadImage("./assets/mushroom.png");
    this.flipped = false;
    this.yoff = 0;
  }
  show() {
     let y = noise(this.yoff+1000) * height; 
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


    if (this.x < -100 ) {
      this.flipped=true;

    }
      if (this.x < -450 ) {
        
      this.flipped=false;
 this.x=width-100;
    }
   } 
 

}