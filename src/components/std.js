import React from 'react'
import Node from './node'
import Edge from './edge'
import Screen from './screen'


export default class ScreenTransitionDiagram extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: JSON.stringify(props.item.settings)
		}
		props.item.on('change', (item)=>{
			console.log(item)
			this.setState({
				item: item
			})
		})
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
		let {graph, item, depth} = this.props;
		let stdItem = this.state.item || item;
		let width = 360;
		let height = 200;
		let text = this.state.text;
		let absolutlyPos = item.node.getAPos();

		let screens = item.screens.map((screen) => {
			const isCurrent = stdItem.currentScreen?(stdItem.currentScreen.getId() == screen.getId()):false;
			return (<Screen x={100} y={100} graph={graph} item={screen} isCurrent={isCurrent}></Screen>)
		});
		let edges = item.wires.map((processId) => {
			return (<Edge src={item} target={graph.getProcess(processId)}></Edge>)
		});

		let transform = "translate("+(this.state.x)+","+(this.state.y)+")";
		let icon_transform = "translate("+(width-40)+","+(0)+")";
		return (<Node width={width} height={height} node={item.node}>
			{screens}
			{edges}
			<text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
			</Node>)
	}
}
/*
		return (<g transform={transform}>
			<rect width={width} height={height} style={{"fill":"rgb(255,255,250)","strokeWidth":1,"stroke":"rgb(0,0,0)"}}></rect>
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
      		  {screens}{edges}
	      	  <text>{`(${absolutlyPos.x}, ${absolutlyPos.y})`}</text>
	      </g>)
	      */
