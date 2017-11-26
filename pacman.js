'use strict';

class Pacman {

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

  down(step) {
    this.y += step;
    this.update();

  }

  right(step) {
    this.x += step;
    this.update();
  }

  update() {
    let $pacman = $('.pacman');
    let background = 'green';
    if (this.collisionDetector.isCollision(this.x, this.y, this.width)) {
      background = 'red';
    }
    $pacman.css({
      "left": this.x + "px",
      "top": this.y + "px",
      "width": this.size + "px",
      "background-color": background
    });
  }

}
