import React from 'react'
import Point2D from 'point2d'

const DRAG_NONE = 0;
const DRAG_MOVE = 1;

export default class RectangleComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { x: props.item.x, y:props.item.y }
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
		//console.log('onMouseMove');
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
		console.log('onMouseUp');
		if(this.state.dragMode == DRAG_MOVE) {
		}
		this.state.dragMode = DRAG_NONE;
	}

	onMouseEnter() {
		console.log('onMouseEnter');

	}

	onMouseLeave() {
		console.log('onMouseLeave');
		this.state.dragMode = DRAG_NONE;
	}

	render() {
		let {item} = this.props;
		let transform = "translate("+this.state.x+","+this.state.y+")";
		return (<g transform={transform}>
			{item.render()}
	      <text x="6" y="20"></text>
	      {(item.shape == 'rect') ?
	      (<rect onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	      		width="200" height="100" style={{"opacity":0}} ></rect>)
	  		: (<circle onClick={this.onClick.bind(this)}
	      		onMouseDown={this.onMouseDown.bind(this)}
	      		onMouseEnter={this.onMouseEnter.bind(this)}
	      		onMouseLeave={this.onMouseLeave.bind(this)}
	      		onMouseMove={this.onMouseMove.bind(this)}
	      		onMouseUp={this.onMouseUp.bind(this)}
	  			r="70" style={{"opacity":0}}></circle>)}
	      </g>)
	}
}