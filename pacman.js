'use strict';

class Pacman {

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
    if (this.x <= 100) {
      this.x = 100;
    } else {
      this.x -= STEP;
    }
    this.update();
  }

  down() {
    this.y += STEP;
    this.update();

  }

  right() {
    this.x += STEP;
    this.update();
  }

  update() {
    let $pacman = $('.pacman');
    $pacman.css("left", this.x + "px");
    $pacman.css("top", this.y + "px");
  }

}
