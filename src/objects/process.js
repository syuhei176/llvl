import Rectangle from './rect'


class Process extends Rectangle {
	recv(event) {
		if(event.type == 'data_in') {
			//状態を変える
			state({
				color: '#f0f0f0'
			})

			//隣接するオブジェクトに影響を与える
			affect_neighbors({
				payload: event.payload
			})

			//子オブジェクトに影響を与える
			affect_child()

		}

	}
}

class Wire extends Rectangle {
	recv(event) {
		if(event.type == 'data_in') {
			//状態を変える
			state({
				color: '#f0f0f0'
			})

			//隣接するオブジェクトに影響を与える
			affect_neighbors({
				payload: event.payload
			})

			//子オブジェクトに影響を与える
			affect_child()

		}

	}
}