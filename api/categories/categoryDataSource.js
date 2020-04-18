import AirtableDataSource from "../lib/AirtableDataSource"

export default class CategoryDataSource extends AirtableDataSource {
  constructor() {
    super(process.env.CATEGORIES, "Category")
  }
}
