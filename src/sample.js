module.exports = {
	graphs: [{
		id: 'g1',
		nodes: [{
			id: 'n1',
			type: 'rect',
			x: 50,
			y:50,
			graph: 'g2'
		},{
			id: 'n2',
			type: 'circle',
			x: 100,
			y: 120
		},{
			id: 'n3',
			type: 'process',
			x: 200,
			y: 120
		}],
		edges: [{
			id: 'e1',
			src: 'n1',
			target: 'n2'
		}]
	},{
		id: 'g2',
		nodes: [{
			id: 'n1',
			type: 'rect',
			x: 50,
			y:50
		},{
			id: 'n2',
			type: 'rect',
			x: 100,
			y: 120
		},{
			id: 'n3',
			type: 'rect',
			x: 200,
			y: 120
		}],
		edges: [{
			id: 'e1',
			src: 'n1',
			target: 'n2'
		}]

	}]
}
