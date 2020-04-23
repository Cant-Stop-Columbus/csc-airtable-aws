import Skill from "../../skills/Skill"
import SkillDataSource from "../../skills/SkillDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../skills/SkillDataSource.js")
}

let dataSource = new SkillDataSource()

let obj = new Skill(dataSource)

test("skills.list lists all current skills", async () => {
  let skills = await obj.list()
  expect(skills.length).toBeGreaterThan(0)
})

test("skills.read returns a skill", async () => {
  let skills = await obj.list()
  let skillId = skills[0].id

  let skill = await obj.read(skillId)
  expect(skill.id).toBe(skillId)
})
