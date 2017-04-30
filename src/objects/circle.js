import React from 'react'
import Rect from './rect'

export default class Rectangle extends Rect {

	constructor(options) {
		super(options)
		this.shape = 'circle';
	}


	recv(event) {
	}


	render() {
	     return (<circle cx={35+100} cy={35+50} r="70" style={{"fill":"rgb(255,255,250)","strokeWidth":3,"stroke":"rgb(0,0,0)"}}></circle>);
	}

}

