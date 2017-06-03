import ZooProcess from './process'

export default class ZooSTD extends ZooProcess {

	constructor(type, graph, options) {
		super(type, graph, options);
		this.currentScreen = null;
		this.screens = [];
	}
	
	addScreen(screen) {
		this.screens.push(screen);
	}
}
