import UUID from 'uuid'
import ZooNode from './node'
import Tuple from './tuple'

/*
 lisp的に色々置けるようにする
*/
export default class ZooProcess {

	constructor(type, graph, options) {
		this.type = type;
		this.graph = graph;
		this.id = UUID();
		this.wires = [];
		this.node = new ZooNode(options);
		this.tuples = [];
	}

	getId() {
		return this.id;
	}

	receive(event) {
		console.log('receive', event);
		this.type.execute(event).then((result)=>{
			this.send(result);
		}).catch((err)=>{
			console.error(err);
		})
	}

	send(event) {
		this.wires.forEach((processId)=>{
			this.graph.getProcess(processId).receive(event);
		});
	}

	execute(args) {
		return this.type.execute();
	}

	updateWires(wires) {
		this.wires = wires;
	}

	addWire(processId) {
		this.wires.push(processId);
	}

	removeWire(processId) {
		let index = this.wires.indexOf(processId);
		this.wires.splice(index, 1);
	}

	addTuple() {
		let newTuple = new Tuple();
		this.tuples.push(newTuple);
	}

}
