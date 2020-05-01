import AirtableDataSource from "../lib/AirtableDataSource"
import Impact from "../impact/Impact"
import ImpactDataSource from "../impact/ImpactDataSource"
import Category from "../categories/Category"
import CategoryDataSource from "../categories/CategoryDataSource"

export default class ProjectDataSource extends AirtableDataSource {
  constructor() {
    super("Projects", "Title")
  }

  // only return projects for whom Status="Launched"
  async list(offset = null) {
    let impactList = new Impact(new ImpactDataSource())
    let categoryList = new Category(new CategoryDataSource())
    let impacts = await impactList.list()
    let categories = await categoryList.list()

    let retval = await this.base(this.view)
      .select({
        view: "Main Website View",
        maxRecords: 100,
        sort: [{ field: "Title", direction: "asc" }],
        filterByFormula: "AND({Status} = 'Launched', NOT('CSC Internal?' = 'Yes'), NOT('Project Website' = ''))"
      })
      .firstPage()

    // expand impacts to include all data
    retval = retval.map((project) => {
      project.fields["Primary Impact Area"] = impacts.filter((impact) => {
        return impact.id === project.fields["Primary Impact Area"][0]
      })
      return project
    })

    // expand categories inside project also
    return retval.map((project) => {
      project.fields.Category = categories.filter((category) => {
        return category.id === project.fields.Category[0]
      })
      return project
    })
  }
}
