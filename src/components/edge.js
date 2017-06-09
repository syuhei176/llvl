import React from 'react'
import Point2D from 'point2d'


export default class Edge extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			src: props.src.node,
			target: props.target.node
		}
		props.src.node.on('change', (node) => {
			this.setState({
				src: node
			});
		})
		props.target.node.on('change', (node) => {
			this.setState({
				target: node
			});
		})
	}

	render() {
		let {src, target} = this.state;
		let offset = this.props.offset || {x:160, y:30}
		let srcPos = src.getAPos();
		let targetPos = target.getAPos();
		let xx = targetPos.x - srcPos.x;
		let yy = (targetPos.y+30) - srcPos.y;
		let bezierCurveControlPointX = 50;
		let path = `M ${offset.x} ${offset.y} C ${offset.x+bezierCurveControlPointX} ${offset.y} ${xx-bezierCurveControlPointX} ${yy} ${xx} ${yy}`
		//let namePos = {x: src.x +(target.x - src.x) / 2, y: src.y +(target.y - src.y) / 2}
		return (<g><path stroke="#333" strokeWidth="2" fill="none" d={path}/></g>)
	}
}