import AirtableDataSource from "../lib/AirtableDataSource"
import Category from "../categories/Category"
import CategoryDataSource from "../categories/CategoryDataSource"

export default class ProjectDataSource extends AirtableDataSource {
  constructor() {
    super("Projects", "Title")
  }

  // only return projects for whom Status="Launched"
  async list(offset = null) {
    let categoryList = new Category(new CategoryDataSource())
    let categories = await categoryList.list()

    // returns a promise that resolves to the list of promotions
    let retval = await this.base(this.view)
      .select({
        view: "Main Website View",
        maxRecords: 100,
        sort: [{ field: "Title", direction: "asc" }],
        filterByFormula: "AND({Status} = 'Launched', NOT('CSC Internal?' = 'Yes'), NOT('Project Website' = ''))"
      })
      .firstPage()

    // expand categories to include all data
    return retval.map((project) => {
      if (project.fields.hasOwnProperty("Category")) {
        project.fields.Category = categories.filter((cat) => {
          return cat.id === project.fields.Category[0]
        })
      }
      return project
    })
  }
}
