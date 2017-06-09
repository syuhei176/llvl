import React from 'react'
import Process from './process'
import UIParts from './uiparts'
import ScreenTransitionDiagram from './std'
import {Graph} from 'react-svg-graph-editor'

export default class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		let {tree} = this.props;

		let processes = this.props.tree.processes.map((item) => {
			let className = item.constructor.name;
			if(className == 'ZooProcess') {
				return (<Process x={100} y={100} graph={this.props.tree} item={item} depth={1}></Process>)
			}else if(className == 'ZooUIParts') {
				return (<UIParts x={100} y={100} graph={this.props.tree} item={item} depth={1}></UIParts>)
			}
		});
		let stds = this.props.tree.stds.map((item) => {
			let className = item.constructor.name;
			return (<ScreenTransitionDiagram x={100} y={100} graph={this.props.tree} item={item} depth={1}></ScreenTransitionDiagram>)
		});
		return (<Graph>
			{processes}
			{stds}
		</Graph>)
	}
}