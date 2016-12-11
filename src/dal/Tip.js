export default class {
  constructor(Model) {
    this.Tip = Model
  }

  async findAllcategories() {
    return await this.Tip.find({}, 'category').distinct('category')
  }
}
