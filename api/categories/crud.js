import handler from "../lib/handler-lib"
import Category from "./Category"
import CategoryDataSource from "./categoryDataSource"

let obj = new Category(new CategoryDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
