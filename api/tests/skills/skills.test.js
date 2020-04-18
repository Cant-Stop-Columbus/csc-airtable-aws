import Skill from "../../skills/Skill"
import SkillDataSource from "../../skills/SkillDataSource"

jest.mock("../../skills/SkillDataSource.js")

let dataSource = new SkillDataSource()

let obj = new Skill(dataSource)

test("skills.list lists all current skills", async () => {
  let skill = await obj.list()
  expect(skill.length).toBeGreaterThan(0)
})

test("skills.read returns a skill", async () => {
  let skill = await obj.read("recxjfpf7NPBcQuzp")
  expect(skill.id).toBe("recxjfpf7NPBcQuzp")
})
