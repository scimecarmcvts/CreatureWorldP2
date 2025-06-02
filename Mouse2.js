class Mouse2 {
  constructor() {  
    this.sure = loadImage('assets/mouse.png');
    this.position = createVector(100, 500);
    this.baseY = 500;  // ground level Y
    this.size = 40;
    
    this.jumpSpeed = 0;
    this.gravity = 0.6;
    this.isJumping = false;

    this.noiseOffset = random(10000);

    // For horizontal movement with physics
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  move() {
    // Update noise offset for smooth noise movement on x-axis
    this.noiseOffset += 0.01;

    // Horizontal position follows noise mapped to screen width
    this.position.x = map(noise(this.noiseOffset), 0, 1, 0, width);

    // Jump logic affects vertical position
    if (this.isJumping) {
      this.jumpSpeed += this.gravity;
      this.position.y += this.jumpSpeed;

      if (this.position.y >= this.baseY) {
        this.position.y = this.baseY;
        this.isJumping = false;
        this.jumpSpeed = 0;
      }
    } else if (random(1) < 0.01) {
      // Random jump trigger
      this.isJumping = true;
      this.jumpSpeed = -10;
    }

    // Apply velocity and acceleration to position for smooth movement if needed
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.position.add(this.velocity);

    // Reset acceleration every frame
    this.acceleration.mult(0);
  }

  show() {
    image(this.sure, this.position.x, this.position.y, this.size + 20, this.size + 20);
  }
}
