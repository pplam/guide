'use strict';

var _spider = require('./spider');

var _spider2 = _interopRequireDefault(_spider);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var spider;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          spider = new _spider2.default(_config2.default);
          _context.next = 4;
          return spider.start();

        case 4:
          _context.next = 6;
          return spider.stop();

        case 6:
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);

          console.log(_context.t0.stack);

        case 11:
          console.log('Done!');

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[0, 8]]);
}))();