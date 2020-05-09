import AirtableDataSource from "../lib/AirtableDataSource"
import Category from "../categories/Category"
import CategoryDataSource from "../categories/CategoryDataSource"

export default class ProjectDataSource extends AirtableDataSource {
  constructor() {
    super("Projects", "Title")
  }

  // only return projects for whom Status="Launched"
  async list(offset = null) {
    let categoryObj = new Category(new CategoryDataSource())
    let categories = await categoryObj.list()

    let projects = await this.base(this.view)
      .select({
        view: "Main Website View",
        maxRecords: 100,
        sort: [{ field: "Title", direction: "asc" }],
        filterByFormula: "AND({Status} = 'Launched', NOT('CSC Internal?' = 'Yes'), NOT('Project Website' = ''))"
      })
      .firstPage()

    let findMatchingCategoryObject = (catId) => {
      return categories.filter((category) => category.id = catId)[0]
    }

    // expand categories inside project also
    return projects.map((project) => {
      project.fields.Category = project.fields.Category.map((catId) => {
        return findMatchingCategoryObject(catId)
      })
      return project
    })
  }
}
