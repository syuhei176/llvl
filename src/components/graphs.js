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
		console.log(data, index)
		let currentGraph = data.items.filter((item) => {return item.id == index})[0];
		return (<div><svg width="600" height="480"><g>
			<text x="5" y="18" style={{"fontSize":"20px"}} onClick={this.changeDefault.bind(this)}>Return</text>
		</g><g><Graph data={currentGraph}></Graph></g></svg></div>)
	}
}