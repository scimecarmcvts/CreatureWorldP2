class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = loadImage("assets/MouseRIGHT.png");
    this.visibility = true;
    this.size = 32;
    this.speed = 3;
    //this.sound = loadSound("assets/MouseName.mp3");
    this.xoff = random(1000);
    this.counter = 0;
  }
  show() {
    if (this.counter < 4) {
      if (this.visibility)
        image(this.img, this.x, this.y, this.size, this.size);
    } else {
      push();
      scale(-1, 1);
      image(this.img, -this.x, this.y, this.size, this.size);
      pop();
    }
    this.counter += 0.01;
    if (this.counter > 11) {
      this.counter = 0;
    }
    // if (this.collision(other)) {
    //   this.playSound();
    // }
  }
  move() {
    this.x = noise(this.xoff) * width;
    this.xoff += 0.002 * this.speed;
    if (millis() % 10000 == 0) this.speed = random(3, 5);
    //Need to change other to another object
  }
  collision(other, distance) {
    return dist(this.x, this.y, other.x, other.y) < distance;
  }
  // playSound() {
  //   song.play();
  // }
}
