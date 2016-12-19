'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
      var search, page, limit, fields, query, select, pagination;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = ctx.query.search;
              page = ctx.query.page;
              limit = ctx.query.limit;
              fields = ['whenAndWhere', 'requirements', 'meterials', 'accordingTo', 'steps', 'extra'];
              query = {};

              if (search) query.search = search;

              select = 'title subtitle mainUrl';

              fields.forEach(function (field) {
                if (ctx.query[field]) select = select + ' ' + field + ' ' + field + 'Url ' + field + 'Html';
              });

              pagination = {
                page: page ? parseInt(page, 10) : 1,
                limit: limit ? parseInt(limit, 10) : 10,
                select: select
              };


              ctx.reqData = { query: query, pagination: pagination };
              _context.next = 12;
              return next();

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};