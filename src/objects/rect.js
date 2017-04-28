import React from 'react'

export default class Rectangle {
	//id
	//attrs
	//neighbors
	//children
	constructor(options) {
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.shape = 'rect';
	}


	//receive event
	recv(event) {
		//クリックされたとかデータを受け取ったとか
		//event

		//状態を変える
		state()

		//隣接するオブジェクトに影響を与える
		affect_neighbors()

		//子オブジェクトに影響を与える
		affect_child()

	}

	set(key, value) {
		this[key] = value
	}

	render() {
		//stateと見た目のマッピング
		//this.children[].stateも
	     return (<rect width="200" height="100" style={{"fill":"rgb(255,255,250)","strokeWidth":3,"stroke":"rgb(0,0,0)"}}></rect>);
	}

}

