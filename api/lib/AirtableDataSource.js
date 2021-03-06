import * as airtable from "airtable"

export default class AirtableDataSource {
  constructor(view, sortField) {
    this.base = airtable.base(process.env.AIRTABLE_BASE)
    this.view = view
    this.sortField = sortField
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of volunteers
    // to get the next page of records, include the offset parameter
    // from the previous request
    let retval = await this.base(this.view)
      .select({
        view: "Master",
        sort: [{ field: this.sortField, direction: "asc" }]
      })
      .all()

    if (this.view === process.env.SHOW_VIEW) {
      console.log(`table: ${this.view} : records = ${retval.length}`)
      console.log(`list: ${JSON.stringify(retval)}`)
    }
    return retval
  }

  async create(data) {
    return await this.base(this.view).create([
      {
        fields: data
      }
    ])
  }

  async read(id) {
    // returns the record corresponding to the ID supplied
    let retval = await this.base(this.view).find(id)
    if (this.view === process.env.SHOW_VIEW) {
      console.log(`read: ${JSON.stringify(retval)}`)
    }
    return retval
  }

  async update(id, data) {
    return await this.base(this.view).update(id, data)
  }
}
