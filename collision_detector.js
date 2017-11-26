// DETEKCJA KOLIZJI
'use strict';

class CollisionDetector {
	
	constructor(walls) {
		this.walls = walls;
	}

	isCollision(x, y, width) {
		let check = y > 100;
		return check;
	}


}