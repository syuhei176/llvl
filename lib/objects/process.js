'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rectangle = require('../rectangle');

var _rectangle2 = _interopRequireDefault(_rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Process = function (_Rectangle) {
	_inherits(Process, _Rectangle);

	function Process() {
		_classCallCheck(this, Process);

		return _possibleConstructorReturn(this, (Process.__proto__ || Object.getPrototypeOf(Process)).apply(this, arguments));
	}

	_createClass(Process, [{
		key: 'recv',
		value: function recv(event) {
			if (event.type == 'data_in') {
				state({
					color: '#f0f0f0'
				});

				affect_neighbors({
					payload: event.payload
				});

				affect_child();
			}
		}
	}]);

	return Process;
}(_rectangle2.default);

var Wire = function (_Rectangle2) {
	_inherits(Wire, _Rectangle2);

	function Wire() {
		_classCallCheck(this, Wire);

		return _possibleConstructorReturn(this, (Wire.__proto__ || Object.getPrototypeOf(Wire)).apply(this, arguments));
	}

	_createClass(Wire, [{
		key: 'recv',
		value: function recv(event) {
			if (event.type == 'data_in') {
				state({
					color: '#f0f0f0'
				});

				affect_neighbors({
					payload: event.payload
				});

				affect_child();
			}
		}
	}]);

	return Wire;
}(_rectangle2.default);
//# sourceMappingURL=process.js.map
