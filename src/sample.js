module.exports = [['entry',
		['stm', ['state', ['s1', ['s2']],['s2']]],
		['def', 'stm', 'diagram',
			[['def', 'state', 'object', [['def', 'name', 'property'],['def', 'transition', 'relation', 'state']]]],
			['eval', ['lambda', ['stm'], ['map', ['get', 'states', 'stm']] ]]
		],[]]]
