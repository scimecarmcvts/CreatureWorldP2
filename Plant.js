
//Rian Nadella
//2A Into to Java
//6/5/2025
//Increases Size when mouse is on it. 
class Plant {
  //This creates the plant along with position,acceleration and velocity
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
  //This shows the plant
  show() {
    image(this.plant, this.position.x, this.position.y, this.size,this.size);
    this.collision();
    this.reset();
  }
//This is how the plant moves
  move() {
    this.position.add(this.velocity)
    this.xoff += this.level;
    this.velocity.add(this.acceleration)
  }
  // This includes collision with walls for the plant. 
  collision() {
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
      this.acceleration.y *= -1;
    }
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
      this.acceleration.x *= -1;
    }
    //This is collsion
  if (d < this.size && (this.size < 80)) {
  this.size += 1;
}
  else if(this.size > 40){
    this.size -=1;
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
