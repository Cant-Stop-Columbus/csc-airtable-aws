import AirtableDataSource from "../lib/AirtableDataSource"

export default class ImpactDataSource extends AirtableDataSource {
  constructor() {
    super("Impact", "Impact Area")
  }
}
