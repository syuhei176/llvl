import React from 'react'
import Point2D from 'point2d'
import CSText from './text'

const DRAG_NONE = 0;
const DRAG_MOVE = 1;

export default class Node extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			x: props.node.x,
			y: props.node.y,
			nodeState:{},
			hideChildren: false
		}
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
			this.props.node.setPos(dd.x, dd.y)
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

	onShowClicked() {
		if(this.state.hideChildren) {
			this.setState({
				hideChildren: false
			});
		}else{
			this.setState({
				hideChildren: true
			});
		}
	}

	onEvalClicked() {
		if(this.props.item.onEvalClicked) this.props.item.onEvalClicked();
	}

	render() {
		let {width, height, node, depth, stroke, children} = this.props;
		let text = '';
		let evaluatable = false, hiddable = false;
		let absolutlyPos = node.getAPos();

		let transform = "translate("+(this.state.x)+","+(this.state.y)+")";
		return (<g transform={transform}>
			<rect width={width} height={height} style={{"fill":"rgb(255,255,250)","strokeWidth":1,"stroke":stroke||"rgb(0,0,0)"}}></rect>
	      <rect onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	      		width={width} height={height} style={{"opacity":0}} ></rect>
	      		<text>{`(${absolutlyPos.x}, ${absolutlyPos.y})`}</text>
		      {children}
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