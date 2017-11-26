'use strict';

class Steering {

	constructor(pacman, cat) {
		this.pacman = pacman;
		this.cat = cat;
	}

	handleKey(e) {
	  switch (e.key) {
	    case 'ArrowDown':
	      this.pacman.down();
	      break;
	    case 'ArrowUp':
	      this.pacman.up();
	      break;
	    case 'ArrowLeft':
	      this.pacman.left();
	      break;
	    case 'ArrowRight':
	      this.pacman.right();
	      break;
	    case 'ArrowLeft':
	      this.pacman.left();
	      break;
	    case 'ArrowRight':
	      this.pacman.right();
	      break;
	    case 'w':
	      this.cat.up();
	      break;
	    case 'a':
	      this.cat.left();
	      break;
        case 'd':
	      this.cat.right();
	      break;
        case 's':
	      this.cat.down();
	      break;
	  }
	}

}

