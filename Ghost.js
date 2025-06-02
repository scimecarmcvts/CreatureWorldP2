class Ghost {
  
  constructor(){
    this.position = createVector(random(400, width), random(400, height))
    this.velocity = createVector(random(3,6), random(5,8))
    this.acceleration = createVector(0.5, 0.5)
    this.size = 1;
    this.img = loadImage("./assets/ghost.png");
    this.speed = 2;
    this.t = random(0,1000);
  }

move(){
  
  
  
  
  
  let x = noise(this.t) * 900;
     // let x = map(noise(t), 0 , 0, 500,20,200, width);

  this.t += 0.005
  
  this.position.x = x;
  
   let y = height / 2
  
  this.t += 0.000001
  
  this.position.y = y;

  this.position.add(this.velocity)
  this.velocity.add(this.acceleration)

  this.acceleration.limit(2)
  this.velocity.limit(5)
 
  

}


  show(){
    
    image(this.img,this.position.x,this.position.y,this.size * 130,this.size * 130);
    
    
  }
  
  collision(other) {
    
    return dist(ghost.x, ghost.y, other.x, other.y) < 20;
      
      
    }
   

}


