import React from 'react'
import Rect from './rect'

export default class Process extends Rect {

	constructor(options, diagram, diagramSet) {
		super(options, diagram, diagramSet)
		this.shape = 'rect';
	}

	recv(event) {
		if(!event) event = {type: 'data_in', payload: new Date().getTime()}
		if(event.type == 'data_in') {
			//状態を変える
			this.changeState({
				color: '#f0f0b5',
				text: event.payload
			})

			//隣接するオブジェクトに影響を与える
			this.affectNeighbors({
				type: 'data_in',
				payload: event.payload
			})

		}

	}

	render(state) {
		//stateと見た目のマッピング
		//this.children[].stateも
		let style = {"fill":state.color||'#fff',"strokeWidth":3,"stroke":"rgb(0,0,0)"};
		return (<g>
	     	<rect width="200" height="100" rx="6" ry="6" style={style}></rect>
	     	<text x="20" y="50">{state.text}</text>
	     	</g>);
	}
}
