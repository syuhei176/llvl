import Tuple from './tuple'

export default class Syntax {

	constructor(json) {
		this.__data = json;
		for(var key in this.__data) {
			this.items[key] = new Tuple(this.__data[key]);
		}
	}

}