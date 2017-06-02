import React from 'react'
import Point2D from 'point2d'


export default class Edge extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			src: props.src.node,
			target: props.target.node
		}
		props.target.node.on('change', (node) => {
			this.setState({
				target: node
			});
		})
	}

	render() {
		let {src, target} = this.state;
		let xx = target.x - src.x;
		let yy = (target.y+30) - src.y;
		let path = `M 160 30 L ${xx} ${yy}`
		//let namePos = {x: src.x +(target.x - src.x) / 2, y: src.y +(target.y - src.y) / 2}
		return (<g><path stroke="#333" strokeWidth="2" fill="none" d={path}/></g>)
	}
}