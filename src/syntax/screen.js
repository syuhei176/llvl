import UUID from 'uuid'
import {NodePos} from 'react-svg-graph-editor'

export default class ZooScreen {

	constructor(graph, options) {
		this.id = UUID();
		this.graph = graph;
		this.uiparts = [];
		this.transitions = [];
		this.node = new NodePos(options);
	}

	getId() {
		return this.id;
	}

	addUIParts(uiparts) {
		//nodeの親子設定
		uiparts.node.setParent(this.node)
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
