import AirtableDataSource from "../lib/AirtableDataSource"

export default class ProblemDataSource extends AirtableDataSource {
  constructor() {
    super("Problems", "Problem Brief")
  }
}
