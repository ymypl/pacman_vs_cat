'use strict';

class Cat {
  
  constructor(x, y, collisionDetector) {
    this.x = x;
    this.y = y;
    this.size = 30;

    this.collisionDetector = collisionDetector;

    this.update();
  }

  up(step) {
    this.y -= step;
    this.update();
  }

  left(step) {
    this.x -= step;
    this.update();
  }

  right(step) {
    this.x += step;
    this.update();
  }

  down(step) {
    this.y += step;
    this.update();
  }

  update() {
    let $cat = $('.cat');
    let background = 'green';
    if (this.collisionDetector.isCollision(this.x, this.y, this.width)) {
      background = 'red';
    }
    $cat.css({
      "left": this.x + "px",
      "top": this.y + "px",
      "width": this.size + "px",
      "height": this.size + "px",
      "background-color": background
    });
  }

}

