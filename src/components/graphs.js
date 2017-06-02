import React from 'react'
import Graph from './graph'

export default class Graphs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			index: props.data.items[0].id
		}
		props.data.on('change', (e) => {
			this.setState({
				index: e.graph
			})
		});
	}

	changeDefault() {
		this.props.data.changeDefault();
	}

	render() {
		let {index} = this.state;
		let {data} = this.props;
		let currentGraph = data.items.filter((item)=>{
			return item.id == index;
		})[0];
		let graphs = data.items.map((item)=>{
			console.log(item.id, currentGraph)
			if( (item.id == index) || (currentGraph.parentNode && currentGraph.parentNode.parent.id == item.id) ) {
				return (<Graph data={item} hidden={false}></Graph>)
			}else{
				return (<Graph data={item} hidden={true}></Graph>)
			}
		})
		return (<div><svg width="600" height="36"><g>
			<text x="10" y="20" style={{"fontSize":"20px"}} onClick={this.changeDefault.bind(this)}>Return</text>
		</g></svg>{graphs}</div>)
	}
}