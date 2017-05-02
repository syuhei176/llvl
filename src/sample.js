module.exports = {
	graphs: [{
		id: 'g1',
		nodes: [{
			id: 'n1',
			name: 'State Machine',
			type: 'object',
			x: 150,
			y:120,
			graph: 'g2'
		},{
			id: 'n2',
			name: 'Data Flow',
			type: 'rect',
			x: 300,
			y: 250,
			graph: 'g3'
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
			type: 'state',
			x: 150,
			y: 120
		},{
			id: 'n2',
			type: 'state',
			x: 450,
			y: 150
		},{
			id: 'n3',
			type: 'state',
			x: 170,
			y: 270
		},{
			id: 'n4',
			type: 'state',
			x: 460,
			y: 320
		}],
		edges: [{
			id: 'e1',
			name: 'time',
			src: 'n1',
			target: 'n2'
		},{
			id: 'e2',
			name: 'time',
			src: 'n2',
			target: 'n3'
		},{
			id: 'e3',
			name: 'time',
			src: 'n3',
			target: 'n4'
		},{
			id: 'e4',
			name: 'time',
			src: 'n4',
			target: 'n1'
		}]

	},{
		id: 'g3',
		nodes: [{
			id: 'n1',
			type: 'process',
			x: 150,
			y:100
		},{
			id: 'n2',
			type: 'process',
			x: 400,
			y: 100
		},{
			id: 'n3',
			type: 'process',
			x: 400,
			y: 300
		}],
		edges: [{
			id: 'e1',
			name: 'wire',
			src: 'n1',
			target: 'n2'
		},{
			id: 'e2',
			name: 'wire',
			src: 'n2',
			target: 'n3'
		}]

	}]
}
