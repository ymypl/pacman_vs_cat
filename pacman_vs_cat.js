'use strict';

let schedule = (fn) => {
  window.setTimeout(() => {
    fn.apply();
    schedule(fn);
  }, 100);
}

let pacman = new Pacman(100, 100);
let cat = new Cat(300, 100);
let level = new Level();
let steering = new Steering(pacman, cat);

level.render();

$(document).keydown(e => steering.handleKey(e));

