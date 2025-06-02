class Mouse {
  constructor(x, y) {
    this.position = createVector(x,y);
    this.velocity = createVector(random(-3,3),0)
    this.acceleration = createVector(0,0)
    this.img = loadImage("assets/MouseRIGHT.png");
    this.visibility = true;
    this.size = 32;
    this.speed = 3;
    this.flip = true;
    //this.sound = loadSound("assets/MouseName.mp3");
  }
  show() {
    
    if (this.visibility && this.flip){
    image(this.img, this.position.x, this.position.y, this.size, this.size);
    } else{
      push();
      scale(-1, 1);
      image(this.img, -this.position.x, this.position.y, this.size, this.size);
      pop();
    }
    // if (this.collision(other)) {
    //   this.playSound();
    // }
  }

  move() {
    this.velocity.limit(15,15)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.xoff += 0.002 * this.speed;
    if (millis() % 10000 == 0) this.speed = random(3, 5);
    this.checkEdges()
  }

  checkEdges(){
    if (this.position.x > width - 12 || this.position.x < 12) {
      this.velocity.x *= -1;
      this.acceleration.x *= -1;
      this.flip = !this.flip
    }
  }

  collision(other, distance) {
    return dist(this.position.x, this.position.y, other.position.x, other.position.y) < distance;
  }
  // playSound() {
  //   song.play();
  // }
}
