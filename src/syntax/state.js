export default class ZooState {

	constructor() {
		this.transitions = [];
	}
	
	addTransition(stateId) {
		this.transitions.push(stateId);
	}
}
