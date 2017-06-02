import React from 'react'
import ZooUIPartsType from '../uipartsType'


export default class ZooUIButton extends ZooUIPartsType {

	constructor() {
		super('button');
	}

	render(uipartObject) {
		return (<foreignObject><button onClick={uipartObject.send.bind(uipartObject)}>Button</button></foreignObject>)
	}
}
