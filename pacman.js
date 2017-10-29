class Pacman {

  constructor(x, y) {
    this.x = 100;
    this.y = 100;
  }

  move() {
    let $pacman = $('.pacman');
    this.x += 10;
    if (this.x > 500) {
      this.x = 100;
    }
    $pacman.css("left", this.x + "px");
  }

}

let schedule = (fn) => {
  window.setTimeout(() => {
    fn.apply();
    schedule(fn);
  }, 100);
}

let pacman = new Pacman();
schedule(() => pacman.move());
