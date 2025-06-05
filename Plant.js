
//Rian Nadella
//2A Into to Java
//6/5/2025
//
class Plant {
  constructor() {
    this.position = createVector(random(0, width),  this.y = random(0, height))
    this.velocity = createVector(random(1,3),random(1,3));
    this.acceleration = createVector(noise(this.xoff + 100) * width,noise(this.xoff) * height )
    this.xoff = random(1000);

    this.level = 0.003;
    this.wobble1 = -5;
    this.wobble2 = 5;
    this.time = 3;
    this.plant = loadImage("./assets/plant.png");
    this.size = 40;
  }
  show() {
    image(this.plant, this.position.x, this.position.y, this.size,this.size);
    this.collision();
    this.reset();
  }

  move() {
    this.position.add(this.velocity)
    this.xoff += this.level;
    this.velocity.add(this.acceleration)
  }
  collision() {
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d < 40) {
      this.level = 0.007;
      this.wobble1 = -5;
      this.wobble2 = 5;
      this.time -= 1 / frameRate();
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
      this.acceleration.y *= -1;
    }
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
      this.acceleration.x *= -1;
    }
  if (d < this.size) {
  this.size += 1;
}
  if (this.size > 80){
    if (d < this.size) {
  this.size -= 1;
}
  }

  }
  reset() {
    if (this.time > 1) {
      this.level = 0.003;
      this.wobble1 = -1;
      this.wobble2 = 1;
      this.time = 3;
    }
  }
}
