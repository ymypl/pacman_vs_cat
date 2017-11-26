'use strict';

let schedule = (fn) => {
  window.setTimeout(() => {
    fn.apply();
    schedule(fn);
  }, 100);
}

let level = new Level();
let collisionDetector = new CollisionDetector(level.walls);
let pacman = new Pacman(354, 668, collisionDetector);
let cat = new Cat(354, 352, collisionDetector);
let steering = new Steering(pacman, cat);

level.render();

$(document).keydown(e => steering.handleKey(e));

