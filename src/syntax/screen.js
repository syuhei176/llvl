import ZooNode from './node'

export default class ZooScreen {

	constructor(options) {
		this.uiparts = [];
		this.transitions = [];
		this.node = new ZooNode(options);
	}
	
	addUIParts(uipart) {
		this.uiparts.push(uipart);
	}

	addTransition(stateId) {
		this.transitions.push(stateId);
	}
}
