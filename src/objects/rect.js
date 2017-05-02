import {EventEmitter} from 'events';
import React from 'react'

export default class Rect extends EventEmitter{
	//id
	//attrs
	//neighbors
	//children
	constructor(options, diagram, diagramSet) {
		super()
		this.id = options.id;
		this.name = options.name;
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.shape = 'rect';
		this.graph = options.graph;
		this.parent = diagram;
		this.diagramSet = diagramSet;
		this.edges = [];
	}

	init() {
		if(this.graph) {
			let diagram = this.diagramSet.getGraph(this.graph);
			this.childDiagram = diagram;
			this.childDiagram.parentNode = this;
		}
		if(this.initAfter) this.initAfter();
	}

	//receive event
	recv(event) {
		//クリックされたとかデータを受け取ったとか
		//event

		//状態を変える
		//state()

		//隣接するオブジェクトに影響を与える
		//affect_neighbors()

		//子オブジェクトに影響を与える
		//affect_child()

	}

	set(key, value) {
		this[key] = value
		this.emit('change', this);
	}

	changeState(state) {
		this.state = state;
		this.emit('change-state', state);
	}

	affectNeighbors(arg) {
		this.edges.forEach((e)=>{
			e.target.recv(arg)
		})
	}

	affectNeighbor(edgeName, arg) {
		this.edges.filter((e)=>{
			return e.name == edgeName
		}).forEach((e)=>{
			e.target.recv(arg)
		})
	}

	affectChilds(arg) {
		let diagram = this.diagramSet.getGraph(this.graph);
		diagram.nodes.forEach((n)=>{
			n.recv(arg)
		})
	}

	affectChild(nodeId, arg) {
		let diagram = this.diagramSet.getGraph(this.graph);
		diagram.nodes.filter((n)=>{
			return n.id == nodeId;
		}).forEach((n)=>{
			n.recv(arg)
		})
	}

	affectParent(arg) {
		this.parent.parentNode.recv(arg);
	}

	getGraph() {
		return this.graph;
	}

	onClick() {
		if(this.graph) {
			this.diagramSet.change(this.graph);
		}
	}

	render(state) {
		//stateと見た目のマッピング
		//this.children[].stateも
	     return (<rect width="200" height="100" style={{"fill":"rgb(255,255,250)","strokeWidth":3,"stroke":"rgb(0,0,0)"}}></rect>);
	}

}

