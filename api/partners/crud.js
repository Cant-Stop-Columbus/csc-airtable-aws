import handler from "../lib/handler-lib"
import Partner from "./Partner"
import PartnerDataSource from "./PartnerDataSource"

let obj = new Partner(new PartnerDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
