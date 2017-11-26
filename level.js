'use strict';

const RENDER_FACTOR = 35;

class Level {

	constructor() {
	  this.walls = [
	    new Wall(0, 0, 21, 1),
	    new Wall(0, 1, 1, 9),
	    new Wall(1, 9, 1, 1),
	    new Wall(20, 1, 1, 9),
	    new Wall(19, 9, 1, 1),
	    new Wall(0, 11, 1, 9),
	    new Wall(1, 11, 1, 1),
	    new Wall(0,20,21,1),
	    new Wall(20,11,1,9),
	    new Wall(19,11,1,1),
	    new Wall(10,1,1,1),
	    new Wall(2,2,3,1),
	    new Wall(6,2,3,1),
	    new Wall(2,3,1,2),
	    new Wall(12,2,3,1),
	    new Wall(16,2,3,1),
	    new Wall(18,3,1,2),
	    new Wall(4,4,3,1),
	    new Wall(10,3,1,1),
	    new Wall(8,4,5,1),
	    new Wall(14,4,3,1),
	    new Wall(2,6,2,1),
	    new Wall(5,6,5,1),
	    new Wall(11,6,5,1),
	    new Wall(17,6,2,1),
	    new Wall(3,8,4,1),
	    new Wall(8,8,5,1),
	    new Wall(14,8,4,1),
	    new Wall(8,9,1,1),
	    new Wall(12,9,1,1),
	    new Wall(3,10,4,1),
	    new Wall(14,10,4,1),
	    new Wall(8,11,1,1),
	    new Wall(12,11,1,1),
	    new Wall(3,12,4,1),
	    new Wall(8,12,5,1),
	    new Wall(14,12,4,1),
	    new Wall(2,14,1,1),
	    new Wall(4,14,1,1),
	    new Wall(6,14,1,1),
	    new Wall(8,14,5,1),
	    new Wall(14,14,1,1),
	    new Wall(16,14,1,1),
	    new Wall(18,14,1,1),
	    new Wall(10,15,1,1),
	    new Wall(2,16,2,1),
	    new Wall(5,16,4,1),
	    new Wall(12,16,4,1),
	    new Wall(17,16,2,1),
	    new Wall(2,17,1,2),
	    new Wall(10,17,1,1),
	    new Wall(18,17,1,2),
	    new Wall(4,18,1,2),
	    new Wall(6,18,3,1),
	    new Wall(12,18,3,1),
	    new Wall(16,18,1,2)
	  ];
	}

	render() {
	  for (let i = 0; i < this.walls.length; i++) {
	    let wall = this.walls[i];
	    let $wall = $('<div class="wall"></div>');
	    $wall.css({
	      top: wall.top * RENDER_FACTOR + 'px',
	      left: wall.left * RENDER_FACTOR + 'px',
	      width: wall.width * RENDER_FACTOR + 'px',
	      height: wall.height * RENDER_FACTOR + 'px',
	    });
	    $('body').append($wall);
	  }
	}

}
