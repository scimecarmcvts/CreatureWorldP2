
class Cat{
  constructor(){
    //set all the variables
    this.x = width/2;
    this.y = 250;
    this.img = loadImage("assets/cat.png");
    this.display = true;
    this.imgWidth = 64;
    this.imgHeight = 64;
    this.page = 0;
    this.tailSpeed = 5;
    this.t = 0;
  }
  
  show(){
    if(this.display){
      switch (this.page){//draw different part of the image based on the page
        case 0:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 1, 0, 31, 50);
          break;
        case 1:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 33, 0, 31, 50);
          break;
        case 2:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 65, 0, 31, 50);
          break;
        case 3:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 97, 0, 31, 50);
          break;
        case 4:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 129, 0, 31, 50);
          break;
        case 5:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 161, 0, 31, 50);
          break;
        case 6:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 193, 0, 31, 50);
          break;
        case 7:
          image(this.img, this.x, this.y, this.imgWidth, this.imgHeight, 225, 0, 31, 50);
          break;
        default:
          break;
      }
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
  }
}