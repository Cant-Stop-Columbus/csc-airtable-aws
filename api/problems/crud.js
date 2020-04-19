import handler from "../lib/handler-lib"
import Problem from "./Problem"
import ProblemDataSource from "./ProblemDataSource"

let obj = new Problem(new ProblemDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
