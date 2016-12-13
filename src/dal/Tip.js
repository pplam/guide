export default class {
  constructor(Model) {
    this.Tip = Model
  }

  async findCategories() {
    return await this.Tip.distinct('category')
  }

  async findSubtitlesByTitle(title) {
    return await this.Tip.find({ title }, 'subtitle')
  }

  async findById(id, fields = 'title subtitle') {
    return await this.Tip.findOne({ _id: id }, fields)
  }

  async findEntries(opts = {}) {
    const q = opts.query || {}
    const query = {}
    if (q._id) query._id = q._id
    if (q.category) query.category = q.category
    if (q.search) {
      query.$or = [
        { title: { $regex: q.search } },
        { subtitle: { $regex: q.search } },
      ]
    }

    const pagination = opts.pagination || { page: 1, select: 'title subtitle' }

    return await this.Tip.paginate(query, pagination)
  }
}
