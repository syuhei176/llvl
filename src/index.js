import React from 'react'
import ReactDOM from 'react-dom'
import SyntaxTree from './syntax/tuple'
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
		let tree = new SyntaxTree(sample);
		ReactDOM.render(
		  <Editor tree={tree}/>,
		  document.getElementById(id)
		);
	}
}
