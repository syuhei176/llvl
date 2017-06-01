module.exports = [['entry',
		['stm', ['state', ['s1', [['s2']],['name']],['s2']]],
		['def', 'stm', 'diagram',
			[['def', 'state', 'object',
				[['def', 'name', 'property'],['def', 'transition', 'relation', 'state']]]],
			['eval', ['lambda', ['stm'], ['map', ['get', 'states', 'stm']] ]]
		],
		['text', ['+', 1, ['+', 1, 1]]],['+', 1, ['+', 5, 5]]]]
