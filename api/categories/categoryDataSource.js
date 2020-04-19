import AirtableDataSource from "../lib/AirtableDataSource"

export default class CategoryDataSource extends AirtableDataSource {
  constructor() {
    super("Categories", "Category")
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of categories
    let retval = await this.base(this.view)
      .select({
        view: "Grid view",
        maxRecords: 100,
        sort: [{ field: "Category", direction: "asc" }]
      })
      .firstPage()
    return retval
  }
}
