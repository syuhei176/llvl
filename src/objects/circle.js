import React from 'react'

export default class Rectangle {

	constructor(options) {
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.shape = 'circle';
	}


	recv(event) {
	}

	set(key, value) {
		this[key] = value
	}

	render() {
	     return (<circle r="70" style={{"fill":"rgb(255,255,250)","strokeWidth":3,"stroke":"rgb(0,0,0)"}}></circle>);
	}

}

