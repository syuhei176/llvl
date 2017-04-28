import Rect from './rect'
import Circle from './circle'

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
		})
	}
}

