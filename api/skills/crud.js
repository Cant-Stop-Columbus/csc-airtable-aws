import handler from "../lib/handler-lib"
import Skill from "./Skill"
import AirtableDataSource from "./skillDataSource"
import AirtableTransformer from "./airtableTransformer"

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()
let volunteer = new Skill(dataSource, transformer)

let list = handler(async (event, context) => {
  let retval = await volunteer.list()
  return retval
})

let read = handler(async (event, context) => {
  let retval = await volunteer.read(event.pathParameters.id)
  return retval
})

export { list, read }
