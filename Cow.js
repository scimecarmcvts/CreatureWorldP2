class Cow {
  constructor() {
    //Constructing x,y and other vars like movement
    noSmooth();
    this.x = random(width);
    this.y = random(300, height);
    this.img = loadImage("./assets/mooshroomL.png");
    this.imgMirror = loadImage("./assets/mooshroom.png");
    this.left = random(0, -100);
    this.right = random(0, 100);
    this.time = random(0,75);
    this.timeInc = 0.01;
    this.s = millis() / 1000;
  }
  show(){
    //Declares a choice variable which decides if the image goes left/right
    let choice = noise(this.time);
    if (choice < 0.5) {
      //Mirror image if going right
    image(this.imgMirror, this.x, this.y, 96, 96);
    this.x++;
    } else {
      //Show original image if going left
    image(this.img, this.x, this.y, 96, 96);
    this.x--;
    }
    
    if (this.x <= 0 || this.x >= 2400) {
    this.x = width / 2;
    }
    
    if (mouseX > this.x && mouseX < this.x && mouseY > this.y && mouseY < this.y) {
    moo.play();
    }
      
    //Allows the creature to move by incrementing time
    this.time += this.timeInc;
  }
  move(){
    
  }
  }
