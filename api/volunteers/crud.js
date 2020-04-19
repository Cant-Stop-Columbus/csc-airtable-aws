import handler from "../lib/handler-lib"
import Volunteer from "./Volunteer"
import VolunteerDataSource from "./VolunteerDataSource"

let dataSource = new VolunteerDataSource()
let volunteer = new Volunteer(dataSource)

let create = handler(async (event, context) => {
  const data = JSON.parse(event.body)
  let retval = await volunteer.create(data)
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

let update = handler(async (event, context) => {
  let data = JSON.parse(event.body)
  let retval = await volunteer.update(event.pathParameters.id, data)
  return retval
})

export { create, list, read, update }
