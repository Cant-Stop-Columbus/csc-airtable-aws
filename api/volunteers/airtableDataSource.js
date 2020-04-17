import * as airtable from "airtable"

export default class AirtableDataSource {
  constructor() {
    this.base = airtable.base(process.env.AIRTABLE_BASE)
    this.view = process.env.VOLUNTEERS || "People"
  }

  async list(offset = null) {
    // returns a promise that resolves to the list of volunteers
    // to get the next page of records, include the offset parameter
    // from the previous request
    return await this.base(this.view)
      .select({
        view: "Master",
        maxRecords: 100,
        sort: [{ field: "Last Name", direction: "asc" }],
        offset: offset
      })
      .firstPage()
  }

  async create(person) {
    return await this.base(this.view).create([
      {
        fields: {
          "Primary Email": person.email,
          Phone: person.phone,
          LinkedIn: person.linkedIn,
          "First Name": person.firstName,
          "Last Name": person.lastName,
          City: person.city,
          State: person.state,
          Skills: ["recFaclOv8Cj99q2a"],
          "Talent notes": person.talentNotes,
          "I am interested in contributing my skills to ...": person.skillsArray,
          Passions: ["recTAnlZs3n31fBH7", "recmlBqJJ8V97o9Wg"]
        }
      }
    ])
  }

  async read(id) {
    // returns the record corresponding to the ID supplied
    return await this.base(this.view).find(id)
  }
}
