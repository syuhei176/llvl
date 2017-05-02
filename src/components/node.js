import React from 'react'
import Point2D from 'point2d'

const DRAG_NONE = 0;
const DRAG_MOVE = 1;

export default class RectangleComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { x: props.item.x, y:props.item.y, nodeState:{} }
		this.props.item.on('change-state', (state) => {
			this.setState({
				nodeState: state
			});
		});
	}

	onClick() {
		console.log('click');
	}

	onMouseDown(e) {
		console.log('onMouseDown');
		this.offset = new Point2D(e.pageX-this.state.x, e.pageY-this.state.y);
		this.setState({
		  dragMode: DRAG_MOVE
		});
		//selectorAction.select(this.props.id);
	}

	onMouseMove(e) {
		if(this.state.dragMode == DRAG_MOVE) {
			//console.log( this.offset );
			var currentPos = new Point2D(e.pageX, e.pageY);
			var dd = currentPos.sub(this.offset);
			//console.log(dd);
			if(this.props.onMoved) {
				this.props.onMoved(dd);
			}
			this.setState({
				x: dd.x,
				y: dd.y
			});
			this.props.item.set('x', dd.x);
			this.props.item.set('y', dd.y);
		}

	}

	onMouseUp(e) {
		if(this.state.dragMode == DRAG_MOVE) {
		}
		this.state.dragMode = DRAG_NONE;
	}

	onMouseEnter() {
	}

	onMouseLeave() {
		this.state.dragMode = DRAG_NONE;
	}

	onFocus() {
		if(this.props.item.onClick) this.props.item.onClick();
	}

	onSend() {
		if(this.props.item.recv) this.props.item.recv();
	}

	render() {
		let {item} = this.props;
		let width = 200;
		let transform = "translate("+(this.state.x-(width/2))+","+(this.state.y-50)+")";
		let icon_transform = "translate("+(width-60)+","+(0)+")";
		return (<g transform={transform}>
			{item.render(this.state.nodeState)}
	      {(item.shape == 'rect') ?
	      (<rect onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	      		width={width} height="100" style={{"opacity":0}} ></rect>)
	  		: (<circle onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	  			cx={35+(width/2)} cy={35+50} r="70" style={{"opacity":0}}></circle>)}
  			<g transform={icon_transform}>
	  		{!!item.getGraph()?(<g>
		      <rect x="0" y="0" width="60" height="20" style={{"fill":"#55e760","stroke":"#111","strokeWidth":1}} onClick={this.onFocus.bind(this)}></rect>
		      <text x="6" y="17" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onFocus.bind(this)}>Focus</text>
		      </g>):(<div/>)}
	  			<g>
		      		<rect x="0" y="20" width="60" height="20" style={{"fill":"#5a60ef","stroke":"#111","strokeWidth":1}} onClick={this.onSend.bind(this)}></rect>
		      		<text x="6" y="37" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onSend.bind(this)}>Send</text>
		      	</g>
	      	</g>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{item.name}</text>
	      </g>)
	}
}