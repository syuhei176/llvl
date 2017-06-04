import {EventEmitter} from 'events';
import Point2D from 'point2d'

export default class ZooNode extends EventEmitter {

	constructor(options) {
		super();
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.parent = null;
	}

	setPos(x, y) {
		this.x = x;
		this.y = y;
		this.emit('change', this);
	}

	getAPos(x, y) {
		if(this.parent) {
			let parentPos = this.parent.getAPos();
			return {
				x: this.x + parentPos.x,
				y: this.y + parentPos.y
			}
		}else{
			return this;
		}
	}

}
