'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(Model) {
    _classCallCheck(this, _class);

    this.Tip = Model;
  }

  _createClass(_class, [{
    key: 'findCategories',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.Tip.distinct('category');

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findCategories() {
        return _ref.apply(this, arguments);
      }

      return findCategories;
    }()
  }, {
    key: 'findSubtitlesByTitle',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(title) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.Tip.find({ title: title }, 'subtitle');

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findSubtitlesByTitle(_x) {
        return _ref2.apply(this, arguments);
      }

      return findSubtitlesByTitle;
    }()
  }, {
    key: 'findById',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id) {
        var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'title subtitle mainUrl';
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.Tip.findOne({ _id: id }, fields);

              case 2:
                return _context3.abrupt('return', _context3.sent);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findById(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: 'findEntries',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var q, query, pagination;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                q = opts.query || {};
                query = {};

                if (q._id) query._id = q._id;
                if (q.category) query.category = q.category;
                if (q.search) {
                  query.$or = [{ title: { $regex: q.search } }, { subtitle: { $regex: q.search } }];
                }

                pagination = opts.pagination || { page: 1, select: 'title subtitle mainUrl' };
                _context4.next = 8;
                return this.Tip.paginate(query, pagination);

              case 8:
                return _context4.abrupt('return', _context4.sent);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findEntries(_x5) {
        return _ref4.apply(this, arguments);
      }

      return findEntries;
    }()
  }]);

  return _class;
}();

exports.default = _class;