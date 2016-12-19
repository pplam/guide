export default () => async (ctx, next) => {
  const search = ctx.query.search

  const page = ctx.query.page
  const limit = ctx.query.limit

  const fields = [
    'whenAndWhere',
    'requirements',
    'meterials',
    'accordingTo',
    'steps',
    'extra',
  ]

  const query = {}
  if (search) query.search = search

  let select = 'title subtitle mainUrl'
  fields.forEach((field) => {
    if (ctx.query[field] === 1 || ctx.query[field] === '1' || ctx.query[field] === 'true') select = `${select} ${field} ${field}Url ${field}Html`
  })

  const pagination = {
    page: page ? parseInt(page, 10) : 1,
    limit: limit ? parseInt(limit, 10) : 10,
    select,
  }

  ctx.reqData = { query, pagination }
  await next()
}
