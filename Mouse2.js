// Eishaan Kumar
// 9th grade intro to Jave period 2
// 6/5/25
// *EXTRA*

class Mouse2 {
  constructor() {  
    this.sure = loadImage('assets/mouse.png');
    this.position = createVector(100, 500);
    this.baseY = 500; 
    this.size = 40;
    
    this.jumpSpeed = 0;
    this.gravity = 0.6;
    this.isJumping = false;

    this.noiseOffset = random(10000);

    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  move() {
    this.noiseOffset += 0.01;

    this.position.x = map(noise(this.noiseOffset), 0, 1, 0, width);

    if (this.isJumping) {
      this.jumpSpeed += this.gravity;
      this.position.y += this.jumpSpeed;

      if (this.position.y >= this.baseY) {
        this.position.y = this.baseY;
        this.isJumping = false;
        this.jumpSpeed = 0;
      }
    } else if (random(1) < 0.01) {
      this.isJumping = true;
      this.jumpSpeed = -10;
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }

  show() {
    let hover = mouseX > this.position.x &&
  mouseX < this.position.x + 60 &&
  mouseY > this.position.y &&
  mouseY < this.position.y + 60;
  
    let imgSize = hover ? 20 : 60; 
    image(this.sure, this.position.x, this.position.y, imgSize, imgSize);
  }
  
}
