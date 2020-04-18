import handler from "../lib/handler-lib"
import Category from "./category"
import AirtableDataSource from "./categoryDataSource"
import AirtableTransformer from "./airtableTransformer"

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()
let category = new Category(dataSource, transformer)

let list = handler(async (event, context) => {
  let retval = await category.list()
  return retval
})

let read = handler(async (event, context) => {
  let retval = await category.read(event.pathParameters.id)
  return retval
})

export { list, read }
