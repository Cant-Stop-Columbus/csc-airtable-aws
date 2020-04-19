import AirtableDataSource from "../lib/AirtableDataSource"

export default class SkillDataSource extends AirtableDataSource {
  constructor() {
    super('Skills', "Skill")
  }
}
