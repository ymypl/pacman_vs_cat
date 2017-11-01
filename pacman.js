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

  down() {
    this.y += STEP;
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

  update() {
    let $pacman = $('.pacman');
    $pacman.css("left", this.x + "px");
    $pacman.css("top", this.y + "px");
  }

}

let schedule = (fn) => {
  window.setTimeout(() => {
    fn.apply();
    schedule(fn);
  }, 100);
}

let handleKey = (e) => {
  switch (e.key) {
    case 'ArrowDown':
      pacman.down();
      break;
    case 'ArrowUp':
      pacman.up();
      break;
    case 'ArrowLeft':
      pacman.left();
      break;
    case 'ArrowRight':
      pacman.right();
      break;
  }
}

const STEP = 10;
let pacman = new Pacman(100, 100);

$(document).keydown(e => handleKey(e));

