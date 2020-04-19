import handler from "../lib/handler-lib"
import Skill from "./Skill"
import SkillDataSource from "./SkillDataSource"

let dataSource = new SkillDataSource()
let obj = new Skill(dataSource)

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
