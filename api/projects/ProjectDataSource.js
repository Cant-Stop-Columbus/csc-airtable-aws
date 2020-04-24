import AirtableDataSource from "../lib/AirtableDataSource"
import Impact from "../impact/Impact"
import ImpactDataSource from "../impact/ImpactDataSource"

export default class ProjectDataSource extends AirtableDataSource {
  constructor() {
    super("Projects", "Title")
  }

  // only return projects for whom Status="Launched"
  async list(offset = null) {
    let impactList = new Impact(new ImpactDataSource())
    let impacts = await impactList.list()

    // returns a promise that resolves to the list of promotions
    let retval = await this.base(this.view)
      .select({
        view: "Main Website View",
        maxRecords: 100,
        sort: [{ field: "Title", direction: "asc" }],
        filterByFormula: "AND({Status} = 'Launched', NOT('CSC Internal?' = 'Yes'), NOT('Project Website' = ''))"
      })
      .firstPage()

    // expand impacts to include all data
    return retval.map((project) => {
      project.fields["Primary Impact Area"] = impacts.filter((impact) => {
        return impact.id === project.fields["Primary Impact Area"][0]
      })
      return project
    })
  }
}
