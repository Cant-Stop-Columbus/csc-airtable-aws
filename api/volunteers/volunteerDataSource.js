import * as airtable from "airtable"

export default class AirtableDataSource {
  constructor() {
    this.base = airtable.base(process.env.AIRTABLE_BASE)
    this.view = process.env.VOLUNTEERS
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of volunteers
    // to get the next page of records, include the offset parameter
    // from the previous request
    return await this.base(this.view)
      .select({
        view: "Master",
        maxRecords: 100,
        sort: [{ field: "Last Name", direction: "asc" }],
        offset: offset
      })
      .firstPage()
  }

  async create(person) {
    return await this.base(this.view).create([
      {
        fields: person
      }
    ])
  }

  async read(id) {
    // returns the record corresponding to the ID supplied
    return await this.base(this.view).find(id)
  }

  async update(id, data) {
    return await this.base(this.view).update(id, data)
  }
}
