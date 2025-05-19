class Plant {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.xoff = random(1000);

    this.level = 0.005;
    this.wobble1 = -1;
    this.wobble2 = 1;
    this.time = 3;
    this.plant = loadImage("./assets/plant.png");
  }
  show() {
    image(this.plant, this.x, this.y, 40, 40);
    this.collision();
    this.reset();
  }

  move() {
    this.y = noise(this.xoff) * height;
    this.x = noise(this.xoff + 100) * width;
    this.xoff += this.level;
    this.x -= random(this.wobble1, this.wobble2);
  }
  collision() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 80) {
      this.level = 0.009;
      this.wobble1 = -5;
      this.wobble2 = 5;
      this.time -= 1 / frameRate();
    }
  }
  reset() {
    if (this.time > 1) {
      this.level = 0.005;
      this.wobble1 = -1;
      this.wobble2 = 1;
      this.time = 3;
    }
  }
}
