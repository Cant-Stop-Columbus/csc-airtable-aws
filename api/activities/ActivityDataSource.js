import AirtableDataSource from "../lib/AirtableDataSource"

export default class ActivityDataSource extends AirtableDataSource {
  constructor() {
    super("Activities", "Activity")
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of activities
    let retval = await this.base(this.view)
      .select({
        view: "Grid view",
        maxRecords: 100,
        sort: [{ field: "Activity", direction: "asc" }]
      })
      .firstPage()
    if (this.view === process.env.SHOW_VIEW) {
      console.log(`list: ${JSON.stringify(retval)}`)
    }
    return retval
  }
}
