export default class {
  constructor(Model) {
    this.Tip = Model
  }

  async findCategories() {
    return await this.Tip.distinct('category')
  }

  async findEntries(opts = {}) {
    const q = opts.query
    const query = {}
    if (q.category) query.category = q.category
    if (q.search) {
      query.$or = [
        { title: { $regex: q.search } },
        { subtitle: { $regex: q.search } },
      ]
    }

    const p = opts.pagination
    const pagination = {}
    if (p.page) pagination.page = p.page
    if (p.limit) pagination.limit = p.limit
    pagination.select = 'title subtitle'

    return await this.Tip.paginate(query, pagination)
  }

  async findSubtitlesByTitle(title) {
    return await this.Tip.distinct('subtitle', { title })
  }

  // async find
}
