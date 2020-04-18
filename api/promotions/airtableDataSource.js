import * as airtable from "airtable"

export default class AirtableDataSource {
  constructor() {
    this.base = airtable.base(process.env.AIRTABLE_BASE)
    this.view = process.env.PROMOTIONS_VIEW
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of promotions
    return await this.base(this.view)
      .select({
        view: "Grid view",
        maxRecords: 100,
        sort: [{ field: "Business", direction: "asc" }],
        offset: offset
      })
      .firstPage()
  }

  async create(business, text, url) {
    return await this.base(this.view)
      .create([
        {
          fields: {
            Business: business,
            Promo: text,
            Website: url
          }
        }
      ])
  }
}
