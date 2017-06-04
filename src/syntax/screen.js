import UUID from 'uuid'
import ZooNode from './node'

export default class ZooScreen {

	constructor(graph, options) {
		this.id = UUID();
		this.graph = graph;
		this.uiparts = [];
		this.transitions = [];
		this.node = new ZooNode(options);
	}

	getId() {
		return this.id;
	}

	addUIParts(uiparts) {
		//nodeの親子設定
		uiparts.node.parent = this.node;
		//
		this.uiparts.push(uiparts);
	}

	addTransition(eventName, screen) {
		this.transitions.push({eventName:eventName,screen:screen});
	}

	getNextScreen(event) {
		console.log(this.transitions, event)
		return this.transitions.filter((t)=>{
			return t.eventName == event;
		})[0];
	}
}
