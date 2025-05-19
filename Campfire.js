class Campfire{
  constructor(){
    this.dir = 1;
    this.sr = 20;
    this.sd = PI/4;
    this.x = random(width);
    this.y = random(300, height);
    this.img = loadImage("./assets/fire.png");
    this.speed = 1;
    this.noiseStart = random(1000);
    this.noiseInc = 0.06;
    this.xoff = random(1000);
  }
  
  //This is the show method that I used.
  show(){
    push();
    translate(this.x, this.y);
    shearX(this.sd-PI/8);
    image(this.img, 0-this.sr, 0);
    pop();
    
  }
  
  //This is the move method that I used.
    move(){

      
      //This is how I used noise function in my program. 
      this.xoff += 0.05;
      this.speed = noise(this.noiseStart) * 2;
      this.noiseStart += this.noiseInc;
      
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
