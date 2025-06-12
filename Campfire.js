//Joseph Sangem
//June 1, 2025
//Introduction to Java Programming
//Creature Lab - Joseph Sangem
//Extra:  I used the Shear Function to help my campfire's movement.

class Campfire{
  constructor(){
    this.dir = 1;
    this.sr = 20;
    this.sd = PI/4;
    this.position = createVector(random(width), random(300,height))
    this.img = loadImage("./assets/fire.png");
    this.speed = 1;
    this.noiseStart = random(1000);
    this.noiseInc = 0.06;
    this.velocity = createVector(2, 3);
    this.acceleration = createVector(0.5, 0.5);
    
  }
  
  //This is the show method that I used.
  show(){
    push();
    angleMode(RADIANS)
    translate(this.position.x, this.position.y);
    shearX(this.sd-PI/8);
    image(this.img, 0-this.sr, 0);
    pop();
    
  }
  
  //This is the move method that I used.
    move(){

      //This is how I used noise function in my program. 
      this.speed = noise(this.noiseStart) * 2;
      this.noiseStart += this.noiseInc;

      //this.acceleration.x += this.speed;

      //this.velocity.limit(10);
    //this.velocity.add(this.acceleration);
    //this.position.add(this.velocity);
      
      if(this.sr > -20 && this.sr <= 20){

      this.sr-= this.dir;
      let d = map(this.sr, 20, -52, PI/8, -PI/8);
        this.sd = d;
      }
      else{
        this.dir*=-1;
        this.sr-= this.dir;
      }
      
    }
}
