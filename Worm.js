/*
Sai Anirvinya Kolli 
6/5/2025
Extra: Worm growth
*/
class Worm {
  constructor() {
    // Initialize vars
    this.segmentLength = floor(random(5, 12));
    this.width = 32;
    this.height = 32;
    this.segmentWidth = 32;
    this.off = random(1000);
    this.horizontalSpeed = this.baseSpeed;
    this.hXpos = random(width);
    this.acc = createVector(noise(this.off+100)*10, noise(this.off)*20)
    this.vel = createVector(5, 10)
    this.timer = new Timer(5000);
    this.turnedX = false;
    this.turnedY = false;

    // Initialize head
    this.head = new HeadSegment(null, this.hXpos, 100);
    this.position = this.head.pos.copy;

    // Create body worm
    let currentSeg = this.head;
    for (let i = 1; i < this.segmentLength; i++) {
      currentSeg.next = new BodySegment(
        null,
        currentSeg.pos.x + this.segmentWidth,
        currentSeg.pos.y
      );
      currentSeg = currentSeg.next;
    }
    currentSeg.next = new TailSegment(
      currentSeg.pos.x + this.segmentWidth,
      currentSeg.pos.y
    );
    this.timer.start();
    
  }
  getLength(){
    let count = 0;
    let s = this.head
    while (s != null){
      count ++;
      s = s.next
    }
    return count;
  }
  move() {
    //On timer out grows the worm
    if(this.timer.isTimedOut() && this.getLength()< 30){
      this.grow();
      this.timer.reset();
    }

    this.position = this.head.pos.copy;

    //Noise offset
    this.off += 1;

    //Sets var for head for quick access
    let h = this.head;

    //Moves and turns head
    h.last = h.pos.copy();
    this.vel.add(this.acc)
    this.vel.limit(15)
    h.pos.add(this.vel)
    this.updateBodySegments(h);


    if ((h.pos.x > width || h.pos.x < 0) && !this.turnedX) {
      this.vel.x *= -0.5;
      this.acc.x *= -1;
      this.turnedX = true
    }
    
    if ((h.pos.y > height || h.pos.y < 0) && !this.turnedY) {
      this.vel.y *= -0.5;
      this.acc.y *= -1;
      this.turnedY = true
    }

    if (this.turnedX){
      if (h.pos.x < width && h.pos.x > 0){
        this.turnedX = false
      }
    }
    if (this.turnedY){
      if (h.pos.y < this.height && h.pos.y > 0){
        this.turnedY = false
      }
    }

    //Optional creature collision
    creatures.forEach((C) => {
      if (this.detectCollision(C) && !(C === this)) this.dir *= -1;
    });

    let dir = p5.Vector.sub(h.last, h.pos);
    h.angle = dir.heading();
  }

  //Grows the creature by one segment
  grow(){
    let s = this.head.next;
    this.head.next = new BodySegment(s,
      this.head.pos.x + this.segmentWidth,
      this.head.pos.y)
  }
  updateBodySegments(seg) {
    //Reccursivly updates the positions of body segments
    if (!seg.next) {
      return null;
    }
    let dir = p5.Vector.sub(seg.next.pos, seg.pos);
    seg.next.angle = dir.heading();

    dir.setMag(this.segmentWidth - 1);
    seg.next.pos = p5.Vector.add(seg.pos, dir);

    this.updateBodySegments(seg.next);
  }

  detectCollision(C) {
    if(!C.position){
      return false;
    }

    return (
      this.position.x < C.position.x + C.width &&
      this.position.x + this.width > C.position.x &&
      this.position.y < C.position.y + C.height &&
      this.position.y + this.height > C.position.y
    );
  }
  show() {
    //Renders all segments

    let cS = this.head;

    while (cS) {
      cS.render();
      cS = cS.next;
    }
  }
}

//Segment parent class
class Segment {
  constructor(x, y) {
    //Basic Vars
    this.pos = createVector(x, y);
    this.angle = 0;
    this.segmentWidth = 32;
  }

  //Render function
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.sprite, 0, 0, this.segmentWidth, this.segmentWidth);
    pop();
  }
}

//Head segment class extends segment

class HeadSegment extends Segment {
  constructor(next, x, y) {
    //Calls super constructor and defines next
    super(x, y);
    this.next = next;
    this.last = createVector(x, y);
    this.sprite = loadImage("assets/wormHead.png");
  }
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.sprite, 0, 0, this.segmentWidth + 20, this.segmentWidth);
    pop();
  }
}

//Body segment class extends segment

class BodySegment extends Segment {
  constructor(next, x, y) {
    //Calls super constructor and defines next
    super(x, y);
    this.next = next;
    this.sprite = loadImage("assets/wormBody.png");
  }
}

//Tail segment class extends segment

class TailSegment extends Segment {
  constructor(x, y) {
    //Calls super constructor and defines
    super(x, y);
    this.next = null;
    this.sprite = loadImage("assets/wormTail.png");
  }
}

class Timer {
  constructor(endTime) {
    this.startTime = 0;
    this.running = false;
    this.endTime = endTime;
  }

  //Start timer
  start() {
    if (!this.running) {
      this.startTime = millis();
      this.running = true;
      this.endTime = this.endTime + this.startTime
    }
  }
  //On reset
  reset() {
    this.startTime = millis();
    this.endTime = this.endTime + this.startTime
  }
  //Checks on time out
  isTimedOut() {
    if(millis() > this.endTime){
      return true
    }
    return false
  }
}
