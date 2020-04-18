export default class Volunteer {
  constructor(dataSource, dataTransformer) {
    this.dataSource = dataSource
    this.transformer = dataTransformer
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of promotions
    let records = await this.dataSource.list(offset)
    return this.transformer.listXform(records)
  }

  async read(id) {
    let record = await this.dataSource.read(id)
    return this.transformer.readXform(record)
  }
}
