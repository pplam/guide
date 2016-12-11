import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tip = new Schema({
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
  extraHtml: String,
})

export default { tip }
