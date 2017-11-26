'use strict';

class Pacman {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;

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
    $pacman.css({
      "left": this.x + "px",
      "top": this.y + "px",
      "width": this.size + "px"
    });
  }

}
