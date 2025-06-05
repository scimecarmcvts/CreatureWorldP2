class PumpkinShroom {
  static sureImg;
  static pumpkinImg;

  constructor() {
    this.image = loadImage('assets/pumkShroom.png');
    this.pumpkinImg = loadImage('assets/pumpkinShroom.png');
    this.noiseScale = 0.005;


    let startX = random(width);
    this.pos = createVector(startX, random(350, 1350));
    this.prevPos = this.pos.copy();
    this.timer = 0;
    this.imgWidth = 120;
    this.imgHeight = 120;
    this.pumpkins = [];
  }

  move() {
    let t = frameCount * this.noiseScale;
    this.prevPos = this.pos.copy();
    this.pos.x = width * noise(t);

    if (millis() - this.timer > 500) {
      let flipped = this.pos.x > this.prevPos.x;
      let offset = flipped ? -50 : 50;
      let pumpkinPos = createVector(this.pos.x + offset, this.pos.y);
      let pumpkinVel = createVector(random(-1, 1), 0);

      this.pumpkins.push({ pos: pumpkinPos, vel: pumpkinVel, alpha: 255 });
      this.timer = millis();
    }

    for (let i = this.pumpkins.length - 1; i >= 0; i--) {
      let p = this.pumpkins[i];
      p.pos.add(p.vel);
      p.alpha -= 5;
      if (p.alpha <= 0) {
        this.pumpkins.splice(i, 1);
      }
    }
  }

  show() {
    let flipped = this.pos.x > this.prevPos.x;

    push();
    translate(this.pos.x, this.pos.y);
    if (flipped) scale(-1, 1);
    image(this.image, 0, 0, this.imgWidth, this.imgHeight);
    pop();

    for (let p of this.pumpkins) {
      tint(255, p.alpha);
      image(this.pumpkinImg, p.pos.x, p.pos.y + 20, 60, 60);
    }

    noTint();
  }
}
