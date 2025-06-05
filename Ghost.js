class Ghost {
constructor(){ 

this.position = createVector(random(400, 1000), random(400, 1000))
this.velocity = createVector(random(3,6),0)
this.acceleration = createVector(0.5, 0)
this.size = 1;
this.img = loadImage("./assets/ghost.png");
this.speed = 2; this.t = random(0,1000); }


move(){
let x = noise(this.t) * 900;     



this.t += 0.005

this.position.x = x;


this.t += 0.000001




this.position.add(this.velocity) 

this.velocity.add(this.acceleration)

this.acceleration.limit(2) 

this.velocity.limit(5)


if (mouseIsPressed){

this.size += 0.5;

}

}
show(){
image(this.img,this.position.x,this.position.y,this.size * 130,this.size * 130);

}

if (mouseIsPressed){

this.size += 5;

}
}

