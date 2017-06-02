import Car from './process/car'
import Cdr from './process/cdr'
import Change from './process/change'
import Button from './uiparts/button'
import Text from './uiparts/text'

export default class Registry {

	constructor() {
		this.processTypes = [];
		this.processTypes['Car'] = Car;
		this.processTypes['Cdr'] = Cdr;
		this.processTypes['Change'] = Change;
		this.processTypes['Button'] = new Button();
		this.processTypes['Text'] = new Text();
	}

	get(name) {
		return this.processTypes[name];
	}

}
