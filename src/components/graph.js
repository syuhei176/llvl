import React from 'react'
import Node from './node'
import Edge from './edge'

export default class Graph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let nodes = this.props.tree.map((item) => {
			return (<Node item={item}></Node>)
		});
		/*
		let edges = this.props.data.edges.map((item) => {
			return (<Edge item={item}></Edge>)
		});
		*/
		return (<g>{nodes}</g>)
	}
}