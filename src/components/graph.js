import React from 'react'
import Node from './node'
import Edge from './edge'

export default class Graph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let nodes = this.props.tree.items.map((item) => {
			return (<Node x={100} y={100} item={item} depth={1}></Node>)
		});
		/*
		let edges = this.props.data.edges.map((item) => {
			return (<Edge item={item}></Edge>)
		});
		*/
		return (<g>{nodes}</g>)
	}
}