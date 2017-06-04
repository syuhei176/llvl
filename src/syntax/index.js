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
import ZooSTD from './std'
import ZooScreen from './screen'
import Registry from './type/registry'

export default class Syntax {

	constructor(json) {
		this.registry = new Registry();
		// no state
		this.processes = [];
		// has state
		this.objects = [];
		this.stds = [];
		this.screens = [];
	}

	addProcess(typeName, options) {
		let type = this.registry.get(typeName);
		let newProcess = new ZooProcess(type, this, options);
		this.processes.push(newProcess);
		return newProcess;
	}

	createUIParts(typeName, options) {
		let type = this.registry.get(typeName);
		let newUIParts = new ZooUIParts(type, this, options);
		return newUIParts;
	}

	addUIParts(typeName, options) {
		let newUIParts = this.createUIParts(typeName, options);
		this.processes.push(newUIParts);
		return newUIParts;
	}

	createSTD(options) {
		let std = new ZooSTD({}, this, options);
		this.stds.push(std)
		return std
	}

	createScreen(options) {
		let screen = new ZooScreen(this, options);
		this.screens.push(screen);
		return screen;
	}

	getProcess(id) {
		return this.processes.filter((process)=>{return process.getId() == id;})[0];
	}


}