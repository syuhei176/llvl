import Rect from './rect'
import Circle from './circle'
import RectObject from './object'
import State from './state'
import Process from './process'
import EventSource from './event'

export default class Diagram {
	constructor(json, ds) {
		this.parse(json, ds);
	}

	init() {
		this.nodes.forEach((node)=>{
			node.init();
		});
	}

	parse(json, ds) {
		this.id = json.id;
		this.nodes = json.nodes.map((item) => {
			if(item.type == 'rect') return new Rect(item, this, ds);
			else if(item.type == 'circle') return new Circle(item, this, ds);
			else if(item.type == 'object') return new RectObject(item, this, ds);
			else if(item.type == 'state') return new State(item, this, ds);
			else if(item.type == 'process') return new Process(item, this, ds);
			else if(item.type == 'event') return new EventSource(item, this, ds);
		})
		this.edges = json.edges.map((item) => {
			console.log(this.nodes, item)
			let edge = {
				id: item.id,
				name: item.name,
				src: this.nodes.filter((n) => {return n.id == item.src})[0],
				target: this.nodes.filter((n) => {return n.id == item.target})[0]
			}
			edge.src.edges.push(edge);
			return edge;
		})

	}
}

