import RectStr from './string'
import RecNum from './number'

export default class Tuple {

	constructor(json) {
		this.__data = json;
		this.items = [];
		for(var key in this.__data) {
			if(typeof this.__data[key] == 'string') {
				this.items.push(new RectStr(this.__data[key]));
			}else if(typeof this.__data[key] == 'number') {
				this.items.push(new RecNum(this.__data[key]));
			}else{
				this.items.push(new Tuple(this.__data[key]));
			}
		}
		this.head = this.items[0];
	}

	getWidth() {
		return this.items.length * 20;
	}

	onEvalClicked() {
		var value = this.evaluate();
		console.log('eval', value)
	}

	evaluate() {
		let op = this.items[0].evaluate();
		if(op == '+') {
			return this.items[1].evaluate() + this.items[2].evaluate();
		}else if(op == 'def') {
			let name = this.items[1].evaluate()
			let type = this.items[2].evaluate()
			let children = this.items[3].evaluate()
			let evaluate = this.items[4].evaluate()
			// childrenで具象構文を定義する
			// evaluateで評価方法を定義する
		}
	}



}