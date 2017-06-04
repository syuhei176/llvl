import React from 'react'
import Node from './node'
import Edge from './edge'
import UIParts from './uiparts'

export default class Screen extends Node {
	constructor(props) {
		super(props)
		this.state.text = JSON.stringify(props.item.settings);
	}

	onEdit() {
		let {item} = this.props;
		var text = window.prompt('edit', this.state.text);
		if(text && item.setSettings) {
			item.setSettings(JSON.parse(text));
			this.setState({text:text})
		}

	}

	render() {
		let {graph, item, depth, isCurrent} = this.props;
		let width = 120;
		let height = 160;
		let text = this.state.text;
		let absolutlyPos = item.node.getAPos();

		let uiparts = item.uiparts.map((item) => {
			return (<UIParts x={100} y={100} graph={graph} item={item} depth={1}></UIParts>)
		});
		let transitions = item.transitions.map((target) => {
			return (<Edge src={item} target={target.screen}></Edge>)
		});

		let transform = "translate("+(this.state.x)+","+(this.state.y)+")";
		let icon_transform = "translate("+(width-40)+","+(0)+")";
		return (<g transform={transform}>
			<rect width={width} height={height} style={{"fill":"rgb(255,255,250)","strokeWidth":2,"stroke":(isCurrent?"rgb(10,150,10)":"rgb(0,0,0)")}}></rect>
	      <rect onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	      		width={width} height={height} style={{"opacity":0}} ></rect>
  			<g transform={icon_transform}>
      		  <rect x="0" y="0" width="40" height="20" style={{"fill":"#5d67ef","stroke":"#111","strokeWidth":1}} onClick={this.onEdit.bind(this)}></rect>
	      	</g>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  {uiparts}{transitions}
	      		<text>{`(${absolutlyPos.x}, ${absolutlyPos.y})`}</text>
	      </g>)
	}
}
