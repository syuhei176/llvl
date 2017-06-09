import ZooProcess from './process'

export default class ZooSTD extends ZooProcess {

	constructor(type, graph, options) {
		super(type, graph, options);
		this.currentScreen = null;
		this.screens = [];
	}
	
	addScreen(screen) {
		//nodeの親子設定
		screen.node.setParent(this.node)
		this.screens.push(screen);
		this.currentScreen = screen;
	}

	receive(event) {
		console.log('receive', this.currentScreen, event);
		let nextScreen = this.currentScreen.getNextScreen(event);
		console.log('nextScreen', nextScreen)
		if(nextScreen) {
			this.currentScreen = nextScreen.screen;
			this.emit('change', this);
		}
	}

}
