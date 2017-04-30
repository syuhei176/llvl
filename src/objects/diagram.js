import Rect from './rect'
import Circle from './circle'
import Process from './process'

export default class Diagram {
	constructor(json, ds) {
		this.items = this.parse(json, ds);
	}

	render() {

	}

	parse(json, ds) {
		this.id = json.id;
		return json.nodes.map((item) => {
			if(item.type == 'rect') return new Rect(item, this, ds);
			else if(item.type == 'circle') return new Circle(item, this, ds);
			else if(item.type == 'process') return new Process(item, this, ds);
		})
	}
}

