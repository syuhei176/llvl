import RectStr from './string';
import RectNum from './number';

function stringify(item) {
	if(item instanceof RectStr) {
		return JSON.stringify(item.__data);
	}else if(item instanceof RectNum) {
		return item.__data;
	}else{
		return '[' + item.items.map((i)=>{
			return stringify(i);
		}).join(',') + ']';
	}
}

module.exports = stringify;