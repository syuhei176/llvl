import React from 'react'
import ReactDOM from 'react-dom'
import Diagram from './objects/diagram'
import Graph from './components/graph'
import Process from './objects/process'

module.exports = {
	start: function(id) {
		let diagram = new Diagram({
			items: [{
				type: 'rect',
				x: 50,
				y:50
			},{
				type: 'circle',
				x: 100,
				y: 120
			},{
				type: 'process',
				x: 200,
				y: 120
			}]
		});
		ReactDOM.render(
		  <Graph data={diagram}/>,
		  document.getElementById(id)
		);
	}
}
