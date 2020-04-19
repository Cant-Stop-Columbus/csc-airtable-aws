import handler from "../lib/handler-lib"
import Project from "./Project"
import ProjectDataSource from "./ProjectDataSource"

let obj = new Project(new ProjectDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
