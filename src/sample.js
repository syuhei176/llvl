module.exports = {
	graphs: [{
		id: 'g1',
		nodes: [{
			id: 'n1',
			name: 'ステートマシン',
			type: 'object',
			x: 150,
			y:140,
			graph: 'g2'
		},{
			id: 'n2',
			name: 'データフロー',
			type: 'rect',
			x: 270,
			y: 260,
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
			y: 150
		},{
			id: 'n2',
			type: 'state',
			x: 450,
			y: 180
		},{
			id: 'n3',
			type: 'state',
			x: 170,
			y: 300
		},{
			id: 'n4',
			type: 'state',
			x: 460,
			y: 350
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
		}]

	},{
		id: 'g3',
		nodes: [{
			id: 'n1',
			type: 'process',
			x: 150,
			y:220
		},{
			id: 'n2',
			type: 'process',
			x: 400,
			y: 270
		}],
		edges: [{
			id: 'e1',
			name: 'wire',
			src: 'n1',
			target: 'n2'
		}]

	}]
}
