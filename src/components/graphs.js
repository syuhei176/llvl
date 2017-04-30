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
		let graphs = data.items.map((item)=>{
			console.log(item, index)
			return (<Graph data={item} hidden={item.id != index}></Graph>)
		})
		return (<div><svg width="600" height="60"><g>
			<text x="10" y="20" style={{"fontSize":"20px"}} onClick={this.changeDefault.bind(this)}>Return</text>
		</g></svg>{graphs}</div>)
	}
}