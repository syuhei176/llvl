import React from 'react'

export default class Process {

	constructor(options) {
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.shape = 'rect';
	}

	recv(event) {
		if(event.type == 'data_in') {
			//状態を変える
			state({
				color: '#f0f0f0'
			})

			//隣接するオブジェクトに影響を与える
			affect_neighbors({
				payload: event.payload
			})

			//子オブジェクトに影響を与える
			affect_child()

		}

	}

	set(key, value) {
		this[key] = value
	}

	render() {
		//stateと見た目のマッピング
		//this.children[].stateも
	     return (<rect width="200" height="100" rx="6" ry="6" style={{"fill":"rgb(255,255,250)","strokeWidth":3,"stroke":"rgb(0,0,0)"}}></rect>);
	}
}

class Wire {
	recv(event) {
		if(event.type == 'data_in') {
			//状態を変える
			state({
				color: '#f0f0f0'
			})

			//隣接するオブジェクトに影響を与える
			affect_neighbors({
				payload: event.payload
			})

			//子オブジェクトに影響を与える
			affect_child()

		}

	}
}