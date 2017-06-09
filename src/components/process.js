import React from 'react'
import {Node, Edge} from 'react-svg-graph-editor'

export default class Process extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text : JSON.stringify(props.item.settings)
		}
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
		let absolutlyPos = item.node.getAPos();

		let edges = item.wires.map((target) => {
			return (<Edge src={item} target={target}></Edge>)
		});

		let transform = "translate("+(this.state.x)+","+(this.state.y)+")";
		let icon_transform = "translate("+(width-40)+","+(0)+")";
		return (<Node width={width} height={height} node={item.node} edges={edges}>
					<text x="6" y="30" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
					<g transform={icon_transform}>
						<rect x="0" y="0" width="40" height="20" style={{"fill":"#5d67ef","stroke":"#111","strokeWidth":1}} onClick={this.onEdit.bind(this)}></rect>
					</g>
			</Node>)
	}
}


/*
		return (<g transform={transform}>
			<rect width={width} height={height} style={{"fill":"rgb(255,255,250)","strokeWidth":1,"stroke":"rgb(0,0,0)"}}></rect>
  			<g transform={icon_transform}>
      		  <rect x="0" y="0" width="40" height="20" style={{"fill":"#5d67ef","stroke":"#111","strokeWidth":1}} onClick={this.onEdit.bind(this)}></rect>
	      	</g>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  {edges}
	      		<text>{`(${absolutlyPos.x}, ${absolutlyPos.y})`}</text>
	      </g>)
*/