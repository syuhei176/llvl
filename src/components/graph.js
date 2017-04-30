import React from 'react'
import Node from './node'
import Edge from './edge'

export default class Graph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let nodes = this.props.data.nodes.map((item) => {
			return (<Node item={item}></Node>)
		});
		let edges = this.props.data.edges.map((item) => {
			return (<Edge item={item}></Edge>)
		});
		return (<div style={{"display":(this.props.hidden?"none":"block")}}><svg width="700" height="480" style={{"border":"solid 1px #333"}}><g><g>{edges}</g><g>{nodes}</g></g></svg></div>)
	}
}