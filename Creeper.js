/*Nathan Abraham
Intro to Java
Creeper Lab
6/5/25
*/
class Creeper {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.size = 32;
      this.img = loadImage("assets/creeper.png"); //Loads image 
      this.xoff = 0;
      this. xSpeed = 2;
      this. ySpeed = 1.5
      this.xAccel = 0.05; //Acceleration
      this.yAccel= 0.03;
    }
    show() {
      image(this.img, this.x, this.y, this.size, this.size);
    }
    move() {
      this.x = noise(this.xoff) * width;
      this.xoff += 0.007;
      this.xSpeed += this.xAccel;
      this.ySpeed += this.yAccel;  
      this.x += this.xSpeed;
      this.y += this.ySpeed; 
      if (this.x < 0 || this.x > width - this.size){ 
        this. xSpeed= - this.xSpeed; //bounces the creeper from side to side
      }
      if(this.y < 0 || this.y > height - this.size){
        this.ySpeed = -this.ySpeed;
        this.yAccel = -this.yAccel;
      }
    }
  }