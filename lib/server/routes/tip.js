'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (app, dal) {
  var router = new _koaRouter2.default();

  router.get('/categories', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
      var cates;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dal.tip.findCategories();

            case 2:
              cates = _context.sent;

              ctx.status = 200;
              ctx.body = cates;

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  router.get('/subtitles/:title', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
      var title, subtitles;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              title = ctx.params.title;
              _context2.next = 3;
              return dal.tip.findSubtitlesByTitle(title);

            case 3:
              subtitles = _context2.sent;

              ctx.status = 200;
              ctx.body = subtitles;

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  router.get('/entry/:id', function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx) {
      var id, fields, entry;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = ctx.params.id;
              fields = ctx.reqData.pagination.select;
              _context3.next = 4;
              return dal.tip.findById(id, fields);

            case 4:
              entry = _context3.sent;

              ctx.status = 200;
              ctx.body = entry;

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());

  router.get('/entries/:category?', function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx) {
      var entries;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (ctx.params.category) {
                ctx.reqData.query.category = ctx.params.category;
              }
              _context4.next = 3;
              return dal.tip.findEntries(ctx.reqData);

            case 3:
              entries = _context4.sent;

              ctx.status = 200;
              ctx.body = entries;

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());

  app.use(router.routes());
  app.use(router.allowedMethods());
};