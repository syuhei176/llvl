import {EventEmitter} from 'events';
import Diagram from './diagram'

export default class DiagramSet extends EventEmitter {

	constructor(json) {
		super(),
		this.items = this.parse(json);
		this.items.forEach((item)=>{item.init()});
	}

	changeDefault() {
		this.change(this.items[0].id);
	}

	change(graph) {
		this.emit('change', {
			graph: graph
		})
	}

	getGraph(id) {
		return this.items.filter((item) => {
			return item.id == id;
		})[0];
	}

	parse(json) {
		return json.graphs.map((graph) => {
			return new Diagram(graph, this);
		});
	}
}

