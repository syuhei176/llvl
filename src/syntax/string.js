export default class RectStr {

	constructor(json) {
		this.__data = json;
	}

	getWidth() {
		return 0;
	}

	evaluate() {
		return this.__data;
	}

	setValue(v) {
		this.__data = v;
	}

}