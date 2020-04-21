import AirtableDataSource from "../lib/AirtableDataSource"

export default class ProjectDataSource extends AirtableDataSource {
  constructor() {
    super("Projects", "Title")
  }

  // only return projects for whom Status="Launched"
  async list(offset = null) {
    // returns a promise that resolves to the list of promotions
    let retval = await this.base(this.view)
      .select({
        view: "Master",
        maxRecords: 100,
        sort: [{ field: "Title", direction: "asc" }],
        filterByFormula: "AND({Status} = 'Launched', NOT('CSC Internal?' = 'Yes'))" 
      })
      .firstPage()
    return retval
  }
}
