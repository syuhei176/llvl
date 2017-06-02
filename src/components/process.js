import React from 'react'
import Node from './node'
import Edge from './edge'


export default class Process extends Node {
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
		let {graph, item, depth} = this.props;
		let width = 160;
		let height = 60;
		let text = this.state.text;

		let edges = item.wires.map((processId) => {
			return (<Edge src={item} target={graph.getProcess(processId)}></Edge>)
		});

		let transform = "translate("+(this.state.x-(width/2))+","+(this.state.y-50)+")";
		let icon_transform = "translate("+(width-40)+","+(0)+")";
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
      		  <rect x="36" y="0" width="40" height="20" style={{"fill":"#5d67ef","stroke":"#111","strokeWidth":1}} onClick={this.onEdit.bind(this)}></rect>
	      	</g>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  {edges}
	      </g>)
	}
}

/*

	  		{!!item.graph?(<g>
		      <rect x="0" y="0" width="60" height="20" style={{"fill":"#55e760","stroke":"#111","strokeWidth":1}} onClick={this.onFocus.bind(this)}></rect>
		      <text x="6" y="17" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onFocus.bind(this)}>Focus</text>
		      </g>):(<div/>)}
	  			<g>
		      		<rect x="0" y="20" width="60" height="20" style={{"fill":"#5a60ef","stroke":"#111","strokeWidth":1}} onClick={this.onSend.bind(this)}></rect>
		      		<text x="6" y="37" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onSend.bind(this)}>Send</text>
		      	</g>

*/