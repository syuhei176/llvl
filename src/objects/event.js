import React from 'react'
import Rect from './rect'

export default class EventSource extends Rect {

	constructor(options, diagram, diagramSet) {
		super(options, diagram, diagramSet)
		this.shape = 'rect';
	}

	init() {
		//settings up event
	}

	recv(event) {

	}

	onClick(e) {
		this.affectNeighbors({
			type: 'event',
			payload: 'time'
		})
	}

	render(state) {
		//stateと見た目のマッピング
		//this.children[].stateも
		let style = {"fill":state.color||'#fff',"strokeWidth":3,"stroke":"rgb(0,0,0)"};
		let btnStyle = {"fill":'#e0e0e0',"strokeWidth":3,"stroke":'#e7e7e7'};
		return (<g>
	     	<rect width="200" height="100" rx="6" ry="6" style={style}></rect>
	     	<text x="20" y="50">{state.text}</text>
	     	<rect x="-20" y="20" width="20" height="20" rx="1" ry="1" style={btnStyle} onClick={this.onClick.bind(this)}></rect>
	     	</g>);
	}
}
