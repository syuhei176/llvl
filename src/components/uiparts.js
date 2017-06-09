import React from 'react'
import {Node, Edge} from 'react-svg-graph-editor'


export default class UIParts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			uiPartsState: {}
		}
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

		//let transform = "translate("+(this.state.x)+","+(this.state.y)+")";
		//let icon_transform = "translate("+(20)+","+(20)+")";
		return (<Node width={width} height={height} node={item.node} edges={edges}>
				{item.render(this.state.uiPartsState)}
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
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  {edges}
				<g transform={icon_transform}>
				</g>
	      		<text>{`(${absolutlyPos.x}, ${absolutlyPos.y})`}</text>
	      </g>)
	      */
