import AirtableDataSource from "../lib/AirtableDataSource"

export default class PromotionDataSource extends AirtableDataSource {
  constructor() {
    super(process.env.PROMOTIONS, "Business")
  }

  // have to implement this at this level because of the different
  // view parameter on the select clause
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
}
