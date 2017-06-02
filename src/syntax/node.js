import {EventEmitter} from 'events';
import Point2D from 'point2d'

export default class ZooNode extends EventEmitter {

	constructor(options) {
		super();
		this.x = options.x || 0;
		this.y = options.y || 0;
	}

	setPos(x, y) {
		this.x = x;
		this.y = y;
		this.emit('change', this);
	}

}
