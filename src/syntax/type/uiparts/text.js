import React from 'react'
import ZooUIPartsType from '../uipartsType'


export default class ZooUIText extends ZooUIPartsType {

	constructor() {
		super('button');
	}

	render(uipartObject, state) {
		return (<text y="20" onClick={uipartObject.send.bind(uipartObject)}>{JSON.stringify(state)}</text>)
	}
}
