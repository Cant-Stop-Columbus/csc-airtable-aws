import AirtableDataSource from "../lib/AirtableDataSource"

export default class ProjectDataSource extends AirtableDataSource {
  constructor() {
    super("Projects", "Title")
  }
}
