// DETEKCJA KOLIZJI
'use strict';

class CollisionDetector {
	
	constructor(walls) {
		this.walls = walls;
	}

	isCollision(x, y, width) {
		for (let i = 0; i < this.walls.length; i++) {
			let wall = this.walls[i];
			
		}
		let check = y > 100;
		return check;
	}


}