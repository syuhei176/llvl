import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxRoot from './syntax'
import Editor from './components/editor'
//import Process from './objects/process'
import sample from './sample'

/*
 Editor
 Term
 Evaluator
 SyntaxTree
*/
module.exports = {
	start: function(id) {
		let root = new SyntaxRoot();
		let p1 = root.addProcess('Car', {x:100, y:100})
		let p2 = root.addProcess('Cdr', {x:120, y:120})
		let button = root.addUIParts('Button', {x:120, y:120})
		let text = root.addUIParts('Text', {x:240, y:120})
		button.addWire(text.getId())
		//p1.addWire(text.getId())
		//addSubFlow
		//addTrigger
		//addActuator
		//addUIParts
		//addScreen
		//addStore
		//addInstantiator
		//addObject
		//addSTM
		//addState
		ReactDOM.render(
		  <Editor tree={root}/>,
		  document.getElementById(id)
		);
	}
}
