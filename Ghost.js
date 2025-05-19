class Ghost {
  
  constructor(){
    
    this.x = random(width);
    this.y = random(300, height);
    this.size = 1;
    this.img = loadImage("./assets/ghost.png");
    this.speed = 2;
    this.t = random(1000);
  }

move(){
  
  
  
  
  
  let x = noise(this.t) * width;
     // let x = map(noise(t), 0 , 0, 500,20,200, width);

  this.t += 0.005
  
  this.x = x;
  
   let y = height / 2 + sin (this.t *this.speed) * 200;
  
  this.t += 0.000001
  
  this.y = y;

 
  

}

  show(){
    
    image(this.img,this.x,this.y,this.size * 130,this.size * 130);
    
    
  }
  
  collision(other) {
    
    return dist(ghost.x, ghost.y, other.x, other.y) < 20;
      
      
    }
   

}


