class Mush {
  constructor() {
    this.sure = loadImage('./assets/mush.png');
    this.noiseLevel = width;
    this.noiseScale = 0.005;
    this.nt = 0;

    this.x = random(width);
    this.imgWidth = 200;
    this.imgHeight = 200;
    this.y = height - this.imgHeight / 2;
  }

  show() {
    image(this.sure, 0, 0, this.imgWidth, this.imgHeight);
  }

  move() {
    this.nt = this.noiseScale * frameCount;
    this.x = this.noiseLevel * noise(this.nt);
  }
}
