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
		let change = root.addProcess('Change', {x:200, y:100, settings:{value:"buttonClick"}})
		let button = root.createUIParts('Button', {x:20, y:100})
		let text = root.createUIParts('Text', {x:20, y:100})
		//Screen Transition Diagram
		let std = root.createSTD({x:100, y:200});
		let screen1 = root.createScreen({x:20, y:30});
		let screen2 = root.createScreen({x:220, y:30});
		screen1.addTransition('buttonClick', screen2);
		screen2.addTransition('buttonClick', screen1);
		change.addWire(std);
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
