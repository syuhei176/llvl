export default class RecNum {

	constructor(json) {
		this.__data = json;
	}

	getWidth() {
		return 0;
	}

	evaluate() {
		return this.__data;
	}

}