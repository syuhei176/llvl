/*
 * Syntax of zoo
 * Process(does not have states)
 * STM(has states)
 * Object(has states)
 * Store(has persistent data)
 */
import ZooProcess from './process'
import ZooObject from './object'
import ZooUIParts from './uiparts'
import Registry from './type/registry'

export default class Syntax {

	constructor(json) {
		this.registry = new Registry();
		// no state
		this.processes = [];
		// has state
		this.objects = [];
	}

	addProcess(typeName, options) {
		let type = this.registry.get(typeName);
		let newProcess = new ZooProcess(type, this, options);
		this.processes.push(newProcess);
		return newProcess;
	}

	addUIParts(typeName, options) {
		let type = this.registry.get(typeName);
		let newUIParts = new ZooUIParts(type, this, options);
		this.processes.push(newUIParts);
		return newUIParts;
	}
	

	getProcess(id) {
		return this.processes.filter((process)=>{return process.getId() == id;})[0];
	}


}