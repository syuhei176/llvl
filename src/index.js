import React from 'react'
import ReactDOM from 'react-dom'
import Main from './objects/main'
import Editor from './components/graphs'
import Process from './objects/process'
import sample from './sample'

module.exports = {
	start: function(id) {
		let diagramSet = new Main(sample);
		ReactDOM.render(
		  <Editor data={diagramSet}/>,
		  document.getElementById(id)
		);
	}
}
