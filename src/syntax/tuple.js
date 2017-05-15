import RectStr from './string'

export default class Tuple {

	constructor(json) {
		this.__data = json;
		this.items = [];
		for(var key in this.__data) {
			if(typeof this.__data[key] == 'string') {
				this.items.push(new RectStr(this.__data[key]));
			}else{
				this.items.push(new Tuple(this.__data[key]));
			}
		}
	}

	getWidth() {
		return this.items.length * 20;
	}

	onEvalClicked() {
		console.log('eval')
	}

}