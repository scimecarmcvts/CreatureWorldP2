//Shrish Kushwaha
//6/5/25
//Creature Lab
//Extra: When you hold your left click next to the mouse, it will increase the size and play mouse squeaks



class Mouse {
  constructor(x, y) {
    this.position = createVector(x,y);
    this.velocity = createVector(random(-3,3),0)
    this.acceleration = createVector(random(-0.1, 0.1),0)
    this.img = loadImage("assets/MouseRIGHT.png");
    this.visibility = true;
    this.size = 32;
    this.limiter = random(2,15)
    this.sound = loadSound("assets/MouseNoise.mp3");
  }
  show() {
    
    if (this.visibility && this.velocity.x > 0){
    image(this.img, this.position.x, this.position.y, this.size, this.size);
    } else{
      push();
      scale(-1, 1);
      image(this.img, -this.position.x, this.position.y, this.size, this.size);
      pop();
    }
  }

  move() {
    if(mouseIsPressed && dist(mouseX,mouseY, this.position.x,this.position.y)<25){
      this.size+=1;
       this.playSound();
    }
    this.velocity.limit(this.limiter,this.limiter)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.checkEdges()
  }

  checkEdges(){
    if ((this.position.x > random(width-200,width-12) && this.velocity.x>0) || (this.position.x < random(12, 200) && this.velocity.x<0)) {
      this.velocity.x *= -1;
      this.acceleration.x *= -1;
    }
  }
  playSound() {
  this.sound.play();
  }
}
