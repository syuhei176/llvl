import React from 'react'
import Rectangle from './node'

export default class Graph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let items = this.props.data.items.map((item) => {
			return (<Rectangle item={item}></Rectangle>)
		});
		return (<div><svg width="600" height="480"><g>{items}</g></svg></div>)
	}
}