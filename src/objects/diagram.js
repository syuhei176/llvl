import Rect from './rect'
import Circle from './circle'
import Process from './process'

export default class Graph {
	constructor(json) {
		this.items = this.parse(json);
	}

	render() {

	}

	parse(json) {
		return json.items.map((item) => {
			if(item.type == 'rect') return new Rect(item);
			else if(item.type == 'circle') return new Circle(item);
			else if(item.type == 'process') return new Process(item);
		})
	}
}

