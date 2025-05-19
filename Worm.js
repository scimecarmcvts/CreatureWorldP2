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
    this.dir = -1;

    // Initialize head
    this.head = new HeadSegment(null, this.hXpos, 100);

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
  }

  move() {
    //outward pos
    this.x = this.head.pos.x;
    this.y = this.head.pos.y;

    //Noise offset
    this.off += 0.01;

    //Sets var for head for quick access
    let h = this.head;

    //Moves and turns head
    h.last = h.pos.copy();
    this.updateBodySegments(h);
    let y = constrain((noise(this.off) * height) / 0.75, height / 4, height);
    h.pos = createVector(this.hXpos, y);

    this.hXpos -= 5 * this.dir;

    if (this.hXpos > width || this.hXpos < 0) {
      this.dir *= -1;
    }

    //Optional creature collision
    creatures.forEach((C) => {
      if (this.detectCollision(C) && !(C === this)) this.dir *= -1;
    });

    let dir = p5.Vector.sub(h.last, h.pos);
    h.angle = dir.heading();
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
    return (
      this.x < C.x + C.width &&
      this.x + this.width > C.x &&
      this.y < C.y + C.height &&
      this.y + this.height > C.y
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
