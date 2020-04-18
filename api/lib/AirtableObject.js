import AirtableTransformer from "./AirtableTransformer"

export default class AirtableObject {
  constructor(dataSource, dataTransformer = new AirtableTransformer()) {
    this.dataSource = dataSource
    this.transformer = dataTransformer
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of promotions
    let records = await this.dataSource.list(offset)
    return this.transformer.listXform(records)
  }

  async create(business, text, url) {
    let record = await this.dataSource.create(business, text, url)
    return this.transformer.createXform(record)
  }

  async read(id) {
    let record = await this.dataSource.read(id)
    return this.transformer.readXform(record)
  }

  async update(id, person) {
    let record = await this.dataSource.update(id, person)
    return this.transformer.updateXform(record)
  }
}
