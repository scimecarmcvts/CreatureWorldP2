class Tree{
  constructor(){
    this.dir = 0.3;
    this.sd = PI/2;
    this.sr = 0;
    this.x = random(width);
    this.y = random(300, height);
    this.img = loadImage("assets/Tree.png");
    this.speed;
  }
  show(){
    push();
    translate(this.x,this.y);
    shearX(this.sd-PI/8);
    image(this.img, 0-this.sr, 0);
    pop();
   
  }
  move(){
    if(this.sr > -2 && this.sr <= 20){
    this.sr-= this.dir;
      let d = map(this.sr, 20, -52, PI/8, -PI/8);
      this.sd = d
    }
    else{this.dir *= -1
          this.sr-= this.dir;}
  }
}