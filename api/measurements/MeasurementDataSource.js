import AirtableDataSource from "../lib/AirtableDataSource"

export default class MeasurementDataSource extends AirtableDataSource {
  constructor() {
    super("Measurement", "Title")
  }
}
