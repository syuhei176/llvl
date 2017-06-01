/*
	atom
	- 属性
	- 振る舞い
*/
class RClass {
	constructor() {
		this.attrs = [];
		this.methods = [];
	}

	instantiate() {
		return new robject(this);
	}
}

class RObject {
	constructor(meta) {
		this.meta = meta;
	}

	call(name, args) {
		this.meta.methods[name](args);
	}

	//表示
	render(props) {
		this.call('render', props);
	}

	//置いた時に何が起こるか
	//m1 to m2
	put(props) {
		this.call('put', props);
	}

	//実体化した時に何が起こるか
	//m2 to m3
	instantiate(params) {
		this.call('instantiate', params);
	}

	receive(args) {
		this.call('receive', args);
	}


}
