export default class ZooProcessType {

	constructor(name, fn) {
		this.name = name;
		this.fn = fn;
	}

	execute(args, settings) {
		return this.fn(args, settings);
	}

}
