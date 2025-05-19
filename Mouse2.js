
class Mouse2 {
    constructor() {  
      this.sure = loadImage('assets/mouse.png');
      this.x = 100;
      this.y = height - 50;
      this.baseY = this.y;
      this.size = 40;
      this.jumpHeight = 0;
      this.isJumping = false;
      this.noiseOffset = 0;
      this.jumpSpeed = 0;
      this.gravity = 0.6;
    }
  
    move(){
  
      this.noiseOffset += 0.01;
      this.x = map(noise(this.noiseOffset), 0, 1, 0, width);
  
     if (this.isJumping) {
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;
  
        if (this.y >= this.baseY) {
          this.y = this.baseY;
          this.isJumping = false;
        }
        }
      
      if (!this.isJumping && random(1) < 0.01) { // Random jump trigger
        this.isJumping = true;
        this.jumpSpeed = -10;
      }
  
    
    }
  
    show() {
    //   fill(0, 200, 0);
      //ellipse(this.x, this.y, this.size, this.size); // Body
    //   fill(255);
      image(this.sure, this.x, this.y, this.size+20, this.size+20);
    //   console.log("x: " + this.x + " y: " + this.y);
    
    }
    
    
    
    
    
    
    
  }
  