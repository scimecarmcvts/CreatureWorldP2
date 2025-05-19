
class Skel {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.img = loadImage("assets/skel.png");  
    this.display = true;
    this.xoff = 0; 
  }

  move() {
    this.x = noise(this.xoff) * width;
    this.y = noise(this.xoff + 1000) * height;  
    this.xoff += 0.004;  
  }

  show() {
    image(this.img, this.x, this.y);
  }
}
