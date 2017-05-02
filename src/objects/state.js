import React from 'react'
import Rect from './rect'

export default class Process extends Rect {

	constructor(options, diagram, diagramSet) {
		super(options, diagram, diagramSet)
		this.shape = 'rect';
	}

	recv(event) {
		if(!event) event = {type: 'event', payload: 'time'}
		if(event.type == 'event') {
			//状態を変える
			this.changeState({
				color: '#fff',
				text: event.payload
			})

			//隣接するオブジェクトに影響を与える
			this.affectNeighbor(event.payload, {
				type: 'switch',
				payload: event.payload
			})

			//子オブジェクトに影響を与える
			//affect_child()
		}else if(event.type == 'switch') {
			this.changeState({
				color: '#f0f0b5',
				text: event.payload
			})
			this.affectParent({
				type: 'switch',
				payload: event.payload,
				source: this
			})
		}

	}


	render(state) {
		//stateと見た目のマッピング
		//this.children[].stateも
	     return (<g><rect width="200" height="100" rx="6" ry="6" style={{"fill":state.color||'#fff',"strokeWidth":3,"stroke":"rgb(0,0,0)"}}></rect><text x="20" y="50">{state.text}</text></g>);
	}
}