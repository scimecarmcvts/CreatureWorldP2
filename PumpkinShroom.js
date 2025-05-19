
class PumpkinShroom {
    static sureImg;
    static pumpkinImg;
  
    constructor() {
      this.image = loadImage('assets/pumpkinShroom.png');
      this.pumpkinImg = loadImage('assets/pumkShroom.png');
      this.noiseScale = 0.005;
      this.x = 0;
      this.y = height - 60;
      this.prevX = 0;
      this.timer = 0;
      this.imgWidth = 120;
      this.imgHeight = 120;
      this.pumpkins = [];
    }
  
    move() {
      let t = frameCount * this.noiseScale;
      this.prevX = this.x;
      this.x = width * noise(t);
  
      if (millis() - this.timer > 500) {
        let flipped = (this.x > this.prevX);
        let offset = flipped ? -50 : 50;
        this.pumpkins.push({ x: this.x + offset, y: this.y, alpha: 255 });
        this.timer = millis();
      }
  
      for (let i = this.pumpkins.length - 1; i >= 0; i--) {
        let p = this.pumpkins[i];
        p.alpha -= 5;
        if (p.alpha <= 0) {
          this.pumpkins.splice(i, 1);
        }
      }
    }
  
    show() {
        
      let flipped = (this.x > this.prevX);
      push();
      translate(this.x, this.y);
      if (flipped) scale(-1, 1);
      image(this.image, 0, 0, this.imgWidth, this.imgHeight);
      pop();
  
      for (let p of this.pumpkins) {
        tint(255, p.alpha);
        image(this.pumpkinImg, this.x, this.y + 20, 60, 60);
      }
  
      noTint();
    }
  }
  