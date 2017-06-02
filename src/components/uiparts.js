import React from 'react'
import Node from './node'
import Edge from './edge'


export default class UIParts extends Node {
	constructor(props) {
		super(props)
		let {item} = this.props;
		item.on('change', (newState)=>{
			this.setState({
				uiPartsState: newState
			});
		})
	}

	render() {
		let {graph, item, depth} = this.props;
		let width = 180;
		let height = 80;
		let text = '';

		let edges = item.wires.map((processId, index) => {
			return (<Edge key={'edge-'+index} src={item} target={graph.getProcess(processId)}></Edge>)
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
	      	</g>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  {edges}
      		  {item.render(this.state.uiPartsState)}
	      </g>)
	}
}
