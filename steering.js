'use strict';

const STEP = 1;

class Steering {

	constructor(pacman, cat) {
		this.pacman = pacman;
		this.cat = cat;
	}

// STRZAŁKI PACMANA
	handleKey(e) {
	  switch (e.key) {
	    case 'ArrowDown':
	      this.pacman.down(STEP);
	      break;
	    case 'ArrowUp':
	      this.pacman.up(STEP);
	      break;
	    case 'ArrowLeft':
	      this.pacman.left(STEP);
	      break;
	    case 'ArrowRight':
	      this.pacman.right(STEP);
	      break;

// STRZAŁKI KOTA

	    case 'w':
	      this.cat.up(STEP);
	      break;
	    case 'a':
	      this.cat.left(STEP);
	      break;
        case 'd':
	      this.cat.right(STEP);
	      break;
        case 's':
	      this.cat.down(STEP);
	      break;
	  }
	}

}

