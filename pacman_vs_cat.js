'use strict';

let schedule = (fn) => {
  window.setTimeout(() => {
    fn.apply();
    schedule(fn);
  }, 100);
}

const RENDER_FACTOR = 34;

let level = new Level();
let collisionDetector = new CollisionDetector(level.walls);
let pacman = new Pacman(10, 19, collisionDetector);
let cat = new Cat(10, 10, collisionDetector);
let steering = new Steering(pacman, cat);

level.render();

$(document).keydown(e => steering.handleKey(e));

