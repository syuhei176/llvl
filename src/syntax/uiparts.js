import ZooProcess from './process'

export default class ZooUIParts extends ZooProcess {

	/*
		@params type is ZooUIPartsType
	*/
	constructor(type, graph, options) {
		super(type, graph, options);
		this.props = {};
	}

	on(event, listener) {
		this.listener = listener;
	}

	/* overide*/
	receive(event) {
		this.updateProps(event)
	}

	updateProps(props) {
		this.props = props;
		this.listener(props);
	}

	render(state) {
		return this.type.render(this, state);
	}

}
