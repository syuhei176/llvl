import React from 'react'
import Point2D from 'point2d'


export default class Edge extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			src: props.item.src,
			target: props.item.target
		}
		props.item.src.on('change', (node) => {
			this.setState({
				src: {
					x: node.x,
					y: node.y
				}
			});
		})
		props.item.target.on('change', (node) => {
			this.setState({
				target: {
					x: node.x,
					y: node.y
				}
			});
		})
	}

	render() {
		let {src, target} = this.state;
		let name = this.props.item.name;
		let path = `M ${src.x} ${src.y} L ${target.x} ${target.y}`
		let namePos = {x: src.x +(target.x - src.x) / 2, y: src.y +(target.y - src.y) / 2}
		return (<g><path stroke="#333" strokeWidth="2" fill="none" d={path}/><text x={namePos.x} y={namePos.y}>{name}</text></g>)
	}
}