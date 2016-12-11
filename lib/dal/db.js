'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _class);

    var host = config.host || '127.0.0.1';
    var port = config.port || '27017';
    var db = config.db || 'guide';

    this.url = 'mongodb://' + host + ':' + port + '/' + db;
    this.Mongo = null;
  }

  _createClass(_class, [{
    key: 'connect',
    value: function connect() {
      var self = this;
      return new Promise(function (resolve, reject) {
        self.Mongo = _mongoose2.default.connect(self.url, function (err) {
          if (!err) {
            resolve(true);
          } else {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      var self = this;
      return new Promise(function (resolve, reject) {
        _mongoose2.default.connection.close(function (err) {
          if (err) {
            reject(err);
          } else {
            self.Mongo = null;
            resolve(true);
          }
        });
      });
    }
  }]);

  return _class;
}();

exports.default = _class;