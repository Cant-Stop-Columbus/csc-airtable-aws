import handler from "../lib/handler-lib"
import Impact from "./Impact"
import ImpactDataSource from "./ImpactDataSource"

let obj = new Impact(new ImpactDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
