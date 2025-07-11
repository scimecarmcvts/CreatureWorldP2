class Tree{
  constructor(treeSize, x, y){
    this.dir = 0.3;
    this.sd = PI/2;
    this.sr = 0;
    this.x = x;
    this.y = y;
    this.position = createVector(this.x,this.y)
    this.img = loadImage("assets/Tree.png");
    this.speed;
    this.treeSize = treeSize;
  }
  show(){
    push();
    angleMode(RADIANS);
    translate(this.x,this.y);
    shearX(this.sd-PI/8);
    image(this.img, 0-this.sr, 0, 64 * this.treeSize, 64 * this.treeSize);
    pop();
   
  }
  move(){
    if(this.sr > -2 && this.sr <= 20){
    this.sr-= this.dir;
      let d = map(this.sr, 20, -52, PI/8, -PI/8);
      this.sd = d;
    }
    else{this.dir *= -1
          this.sr-= this.dir;}
  }
}