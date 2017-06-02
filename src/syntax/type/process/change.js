import ZooProcessType from '../processType'

module.exports = new ZooProcessType(
	'change',
	(message, settings)=>{

		return new Promise((resolve, reject)=>{
			if(settings.key) {
				message[settings.key] = settings.value;
			}else{
				message = settings.value;
			}
			resolve(message);
		});
	});
