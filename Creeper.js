class Creeper {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.size = 32;
      this.img = loadImage("assets/creeper.png");
      this.xoff = 0;
    }
    show() {
      image(this.img, this.x, this.y, this.size, this.size);
    }
    move() {
      this.x = noise(this.xoff) * width;
      this.xoff += 0.007;
    }
  }