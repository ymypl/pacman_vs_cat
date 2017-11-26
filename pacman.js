'use strict';

class Pacman {

  constructor(x, y, collisionDetector) {
    this.x = x;
    this.y = y;
    this.size = RENDER_FACTOR - 2;

    this.collisionDetector = collisionDetector;

    this.update();
  }

  up() {
    this.y--;
    this.update();
  }

  left() {
    this.x--;
    this.update();
  }

// Ja mam Javascript Ja mam Pacmana O pacman.js
  down() {
    this.y++;
    this.update();

  }

  right() {
    this.x++;
    this.update();
  }

  update() {
    let $pacman = $('.pacman');
    let background = 'green';
    if (this.collisionDetector.isCollision(this.x, this.y, this.width)) {
      background = 'red';
    }
    let x = this.x * RENDER_FACTOR + 1;
    let y = this.y * RENDER_FACTOR + 1;
    $pacman.css({
      "left": x + "px",
      "top": y + "px",
      "width": this.size + "px",
      "background-color": background
    });
  }

}
