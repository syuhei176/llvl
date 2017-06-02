export default class ZooProcessType {

	constructor(name, fn) {
		this.name = name;
		this.fn = fn;
	}

	execute(args) {
		return this.fn(args);
	}

}
