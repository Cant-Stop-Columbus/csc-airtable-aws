import AirtableDataSource from "../lib/AirtableDataSource"

export default class PartnerDataSource extends AirtableDataSource {
  constructor() {
    super("Partners", "Partner")
  }

  // have to implement this at this level because of the different
  // view parameter on the select clause
  async list(offset = null) {
    // returns a promise that resolves to the list of promotions
    let retval = await this.base(this.view)
      .select({
        view: "Grid view",
        maxRecords: 100,
        sort: [{ field: "Partner", direction: "asc" }]
      })
      .firstPage()
    if (this.view === process.env.SHOW_VIEW) {
      console.log(`list: ${JSON.stringify(retval)}`)
    }
    return retval
  }
}
