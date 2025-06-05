
class Cat{
  constructor(){
    //set all the variables
    this.pos = createVector(width/2, height/5);
    this.img = loadImage("assets/cat.png");
    this.display = true;
    this.imgWidth = 64;
    this.imgHeight = 64;
    this.page = 0;
    this.tailSpeed = 5;
    this.t = 0;
    this.velocity = createVector(1, 1);
    this.acceleration = createVector(0.1, 0.1);
  }
  
  show(){
    if(this.display){
      switch (this.page){//draw different part of the image based on the page
        case 0:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 1, 0, 31, 50);
          break;
        case 1:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 33, 0, 31, 50);
          break;
        case 2:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 65, 0, 31, 50);
          break;
        case 3:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 97, 0, 31, 50);
          break;
        case 4:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 129, 0, 31, 50);
          break;
        case 5:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 161, 0, 31, 50);
          break;
        case 6:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 193, 0, 31, 50);
          break;
        case 7:
          image(this.img, this.pos.x, this.pos.y, this.imgWidth, this.imgHeight, 225, 0, 31, 50);
          break;
        default:
          break;
      }
    }
    if(this.imgWidth > width){
      stroke(255, 0, 0);
      strokeWeight(3);
      fill(255, 0, 0);
      textSize(120);
      textAlign(CENTER);
      text("CAT IS YOUNES", width/2, height/2);
    }
  }
  
  move(){
    if(frameCount % this.tailSpeed == 0){
      this.page ++;
    }
    if(this.page == 8){
      this.page = 0;
      
      //change tail speed with noise
      this.tailSpeed = int(noise(this.t) * 10);
      this.t += 0.07;
    }

    if(mouseX > this.pos.x - this.imgWidth/2 && mouseX < this.pos.x + this.imgWidth/2 && mouseY > this.pos.y - this.imgHeight/2 && mouseY < this.pos.y + this.imgHeight/2){
      this.imgWidth += this.velocity.x;
      this.imgHeight += this.velocity.y;
      this.velocity.x += this.acceleration.x;
      this.velocity.y += this.acceleration.y;
    } else if(this.imgWidth > 64){
      this.imgWidth -= this.velocity.x;
      this.imgHeight -= this.velocity.y;
    } else{
      this.velocity.x = 1;
      this.velocity.y = 1;
    }
    
  }
}