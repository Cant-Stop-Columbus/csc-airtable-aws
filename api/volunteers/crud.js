import handler from "../lib/handler-lib"
import Volunteer from "./Volunteer"
import AirtableDataSource from "./volunteerDataSource"
import AirtableTransformer from "./airtableTransformer"

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()
let volunteer = new Volunteer(dataSource, transformer)

let create = handler(async (event, context) => {
  const data = JSON.parse(event.body)
  let retval = await volunteer.create(
    data.Business, data.Promo, data.Website
    )
  return retval
})

let list = handler(async (event, context) => {
  let retval = await volunteer.list()
  return retval
})

let read = handler(async (event, context) => {
  let retval = await volunteer.read(event.pathParameters.id)
  return retval
})

export { create, list, read }
