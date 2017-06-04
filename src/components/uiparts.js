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
		let width = 160;
		let height = 60;
		let text = '';
		let absolutlyPos = item.node.getAPos();

		let edges = item.wires.map((target, index) => {
			return (<Edge key={'edge-'+index} src={item} target={target}></Edge>)
		});

		let transform = "translate("+(this.state.x)+","+(this.state.y)+")";
		let icon_transform = "translate("+(20)+","+(20)+")";
		return (<g transform={transform}>
			<rect width={width} height={height} style={{"fill":"rgb(255,255,250)","strokeWidth":1,"stroke":"rgb(0,0,0)"}}></rect>
	      <rect onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	      		width={width} height={height} style={{"opacity":0}} ></rect>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  {edges}
				<g transform={icon_transform}>
				</g>
					{item.render(this.state.uiPartsState)}
	      		<text>{`(${absolutlyPos.x}, ${absolutlyPos.y})`}</text>
	      </g>)
	}
}
