class MushroomAni{
    constructor(){
      this.x = random(width-50)
      this.y = random(height-50)
      this.img = loadImage('assets/Cmushroom.png'); 
      this.currentFrame = 0;
    }
    show(){
       
      image(this.img, this.x, this.y, 64, 64, this.currentFrame * 32, 0, 32, 32,COVER)
    }
    move(){
      if (frameCount % 7 == 0){
        this.currentFrame = (this.currentFrame + 1) % 12
      } 
    }
  }