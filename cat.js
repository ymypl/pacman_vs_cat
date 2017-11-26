'use strict';

class Cat {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.update();
  }

  up() {
    this.y -= STEP;
    this.update();
  }

  left() {
    this.x -= STEP;
    this.update();
  }

  right() {
    this.x += STEP;
    this.update();
  }

  down() {
    this.y += STEP;
    this.update();
  }

  update() {
    let $cat = $('.cat');
    $cat.css("left", this.x + "px");
    $cat.css("top", this.y + "px");
  }

}

