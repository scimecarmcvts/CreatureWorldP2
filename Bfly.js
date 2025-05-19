
class Bfly {
  constructor() {
  this.x = random(width);
  this.y = random(height);
  this.display = true;
  this.img = loadImage('./assets/bfly.png');
  this.noiseStart = random(1000);
  this.noiseInc = 0.02;
  this.ySpeed = 1.5; // speed of up/down motion
  this.yDirection = 1; // direction: 1 = down, -1 = up
}

move() {
  // move x (side-to-side motion)
  this.x = noise(this.noiseStart) * width/4;
  this.noiseStart += this.noiseInc;

  // move y: up and down 
  this.y += this.ySpeed * this.yDirection;

  // if butterfly hits top or bottom chadge direction
  if (this.y > height / 2 + 35 || this.y < height / 2 - 40) {
  this.yDirection *= -1;
}
}

show() {
  imageMode(CENTER);
  image(this.img, this.x, this.y);
}
}