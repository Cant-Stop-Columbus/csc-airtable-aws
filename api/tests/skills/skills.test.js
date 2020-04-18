import Skill from "../../skills/Skill"
import AirtableDataSource from "../../skills/skillDataSource"
import AirtableTransformer from "../../skills/airtableTransformer"

jest.mock("../../skills/skillDataSource.js")

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()

let obj = new Skill(dataSource, transformer)

test("skills.list lists all current skills", async () => {
  let skill = await obj.list()
  expect(skill.length).toBeGreaterThan(0)
})

test("skills.read returns a skill", async () => {
  let skill = await obj.read("recxjfpf7NPBcQuzp")
  expect(skill.id).toBe("recxjfpf7NPBcQuzp")
})
