import React from 'react'
import Point2D from 'point2d'
import CSText from './text'
import RectStr from '../syntax/string'
import RectNum from '../syntax/number'

const DRAG_NONE = 0;
const DRAG_MOVE = 1;

export default class Node extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			x: props.x,
			y: props.y,
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
			/*
			this.props.item.set('x', dd.x);
			this.props.item.set('y', dd.y);
			*/
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

	onEdit() {
		let {item} = this.props;
		var text = window.prompt('edit');
		if(text && item.setValue)
			item.setValue(text);
	}

	render() {
		let {item, depth} = this.props;
		let width = 100 + item.getWidth();
		let height = 50;
		let children = null;
		let text = '';
		let evaluatable = false, hiddable = false;
		if(item instanceof RectStr) {
			text = item.__data
			width = 50
			height = 25
		}else if(item instanceof RectNum) {
			text = String(item.__data)
			width = 50
			height = 25
		}else{
			evaluatable = true;
			hiddable = true;
			//Nodeを隠す？
			if(!this.state.hideChildren) {
				//具象構文によってここを変更すべき
				//head.__dataから関数を取り出し
				let head = item.head;
				if(head.__data == 'text') {
					text = head.__data;
					children = [
						(<Node x={50} y={70} item={item.items[0]} depth={depth+1}></Node>),
						(<CSText x={150} y={100} item={item.items[1]} depth={depth+1}></CSText>)
					];
				}else{
					//CSMan.get(head.__data);
					children = item.items.map((i, index) => {
						return (<Node x={50 + index * 100} y={70} item={i} depth={depth+1}></Node>)
					});
				}
			}
		}

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
  				{evaluatable?
	  			(<g>
		      		<rect x="0" y="0" width="40" height="20" style={{"fill":"#5a60ef","stroke":"#111","strokeWidth":1}} onClick={this.onEvalClicked.bind(this)}></rect>
		      		<text x="6" y="17" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onEvalClicked.bind(this)}>Eval</text>
		      	</g>):(<div/>)
		      	}
		      	{hiddable?
		      	(<g>
		      		<rect x="0" y="20" width="40" height="20" style={{"fill":"#5a60ef","stroke":"#111","strokeWidth":1}} onClick={this.onShowClicked.bind(this)}></rect>
		      		<text x="6" y="37" fill="#fff" style={{"fontSize":"12px"}} onClick={this.onShowClicked.bind(this)}>{this.state.hideChildren?'Show':'Hide'}</text>
		      	</g>):(<div/>)
		      	}
	      	</g>
		      <text x="6" y="20" fill="#333" style={{"fontSize":"14px"}}>{text}</text>
      		  <rect x="36" y="0" width="40" height="20" style={{"fill":"#5d67ef","stroke":"#111","strokeWidth":1}} onClick={this.onEdit.bind(this)}></rect>
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