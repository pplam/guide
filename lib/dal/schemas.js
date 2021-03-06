'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var tip = new Schema({
  category: { type: String },
  title: { type: String },
  subtitle: { type: String },
  mainUrl: String,

  whenAndWhere: String,
  whenAndWhereUrl: String,
  whenAndWhereHtml: String,

  requirements: String,
  requirementsUrl: String,
  requirementsHtml: String,

  meterials: String,
  meterialsUrl: String,
  meterialsHtml: String,

  accordingTo: String,
  accordingToUrl: String,
  accordingToHtml: String,

  steps: String,
  stepsUrl: String,
  stepsHtml: String,

  extra: String,
  extraUrl: String,
  extraHtml: String
});
tip.plugin(_mongoosePaginate2.default);

exports.default = { tip: tip };