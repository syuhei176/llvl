import ZooProcessType from '../processType'

module.exports = new ZooProcessType(
	'car',
	(list)=>{
		return new Promise((resolve, reject)=>{
			resolve(list[0])
		});
	});
