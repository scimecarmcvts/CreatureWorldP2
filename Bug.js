


let m = [];
class Bug {
  constructor() {
     this.position = createVector(random(50, width - 50), random(50, height-50));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
 this.pos = createVector(this.position.x, this.position.y);
    this.vel = createVector(0, 1);
    this.acc = createVector(0, 0.1);
    this.speed=2;
    this.i =1;
this.u = 0;
    this.p=500
    this.xRoc = 0;
    this.yRoc = 0;
    this.x = width / 2;
    this.y = height / 2;
    this.display = true;
    this.shoot = false;
    this.img = loadImage("./assets/bug.png");
    this.img1 = loadImage("./assets/bugmis.png");
    this.img2 = loadImage("./assets/missle.png");
    this.img3 = loadImage("./assets/explosion.png");
    this.img4 = loadImage("./assets/bug2.png")
    this.img5 = loadImage("./assets/cloud.png")
    this.img6 = loadImage("./assets/bombing.png")
    this.rot = random(1,360)
    this.speed=random(1, 3)
  }
  move() {
    this.position.add(this.velocity);
    
    this.velocity.add(this.acceleration);
      this.pos.add(this.vel);
    this.vel.add(this.acc);
    if (this.pos.x > width) {
      this.vel.x *= -1;

    }
    if (this.pos.y > height) {
      this.vel.y *= -0.8;
      this.vel.y - 0.2
this.v
    }
    if (this.pos.x < 0) {
      this.vel.x *= -1;

    }
   
    if (this.position.x > width) {
      this.velocity.x *= -1;

    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
    }
    if (this.position.x < 25) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 25) {
      this.velocity.y *= -1;
    }
    if(this.x<=50){
      this.rot=(random(75,105))
      this.speed=random(1,3)
    }
    if(this.x>=windowWidth-50){
      this.rot=(random(255,285))
            this.speed=random(1,3)
    }
   if(this.y>=windowHeight-50){
     this.rot=(random(345, 375))
           this.speed=random(1,3)
   }
    if(this.y<=50){
      this.rot=(random(165, 195))
            this.speed=random(1,3)
    }
   textSize(30)
     this.x += cos(this.rot-90) * this.speed; // Move in the direction of the rotation
      this.y += sin(this.rot-90) * this.speed; 
      
    this.p--
    this.c--

    if(this.p==300){
  this.shoot=true
    }
    if(this.p<=0){
      this.rot=random(1,360)
      this.p=int(random(500, 1000))
    }
     
    }
  show() {
    image(this.img6, this.pos.x, this.pos.y, 50, 50)
    push();
    angleMode(DEGREES)
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    rotate(this.rot);
    if (this.shoot == false) {
      image(this.img, 0, 0, 100, 100);
    }
    if (this.shoot == true) {
      image(this.img1, 0, 0, 100, 100);
      this.i++;
      if (this.i > 50) {
        this.shoot = false;
        this.yRoc = 5;
    
      }
    }

    if (this.yRoc == 5) {
      this.xRoc += 7;
      image(this.img2, 0, 0 - this.xRoc, 100, 100);
      this.i = 0;
      if (this.xRoc >= 300) {
        image(this.img3, 0, 0 - this.xRoc, 250, 250);
        
        this.yRoc = 0;

        this.i=1
        
      } 
      
    }
    pop();
  }

}
