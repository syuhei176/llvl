import ZooProcessType from '../processType'

module.exports = new ZooProcessType(
	'cdr',
	(list)=>{
		return new Promise((resolve, reject)=>{
			resolve(list.slice(1))
		});
	});
