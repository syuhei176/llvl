import React from 'react'
import Process from './process'
import UIParts from './uiparts'
import ScreenTransitionDiagram from './std'

export default class Graph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let nodes = this.props.graph.processes.map((item) => {
			let className = item.constructor.name;
			if(className == 'ZooProcess') {
				return (<Process x={100} y={100} graph={this.props.graph} item={item} depth={1}></Process>)
			}else if(className == 'ZooUIParts') {
				return (<UIParts x={100} y={100} graph={this.props.graph} item={item} depth={1}></UIParts>)
			}
		});
		let stds = this.props.graph.stds.map((item) => {
			let className = item.constructor.name;
			return (<ScreenTransitionDiagram x={100} y={100} graph={this.props.graph} item={item} depth={1}></ScreenTransitionDiagram>)
		});
		return (<g>{stds}{nodes}</g>)
	}
}