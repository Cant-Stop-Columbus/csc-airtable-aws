import handler from "../lib/handler-lib"
import Activity from "./Activity"
import ActivityDataSource from "./ActivityDataSource"

let obj = new Activity(new ActivityDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
