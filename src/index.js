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
		let change = root.addProcess('Change', {x:300, y:100, settings:{value:"event"}})
		let button = root.addUIParts('Button', {x:100, y:100})
		let text = root.addUIParts('Text', {x:500, y:100})
		//Screen Transition Diagram
		let std = root.createSTD({x:180, y:270});
		let screen1 = root.createScreen({x:100, y:100});
		let screen2 = root.createScreen({x:300, y:100});
		std.addScreen(screen1);
		std.addScreen(screen2);
		screen1.addUIParts(button);
		screen2.addUIParts(text);
		button.addWire(change)
		change.addWire(text)
		ReactDOM.render(
		  <Editor tree={root}/>,
		  document.getElementById(id)
		);
	}
}
