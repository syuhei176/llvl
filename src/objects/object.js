import React from 'react'
import Rect from './rect'

export default class RectObject extends Rect {

	constructor(options, diagram, diagramSet) {
		super(options, diagram, diagramSet)
		this.shape = 'rect';
	}

	initAfter() {
		this.changeCurrentState(this.childDiagram.nodes[0].id);
	}

	changeCurrentState(id) {
		this.currentStateId = id;

		this.changeState({
			text: this.currentStateId
		})

	}

	recv(event) {
		if(!event) event = {type: 'event', payload: 'time'}
		if(event.type == 'event') {
			//状態を変える
			this.changeState({
				color: '#f0f0f7'
				//text: event.payload
			})

			this.affectChild(this.currentStateId, {
				type: 'event',
				payload: event.payload
			});
		}else if(event.type == 'switch') {
			this.changeCurrentState(event.source.id);
		}

	}

	render(state) {
		//stateと見た目のマッピング
		//this.children[].stateも
	     return (<g><rect width="200" height="100" style={{"fill":state.color||'#fff',"strokeWidth":3,"stroke":"rgb(0,0,0)"}}></rect><text x="20" y="50">{state.text}</text></g>);
	}
}