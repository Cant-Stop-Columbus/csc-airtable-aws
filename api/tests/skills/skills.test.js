import Skill from "../../skills/Skill"
import SkillDataSource from "../../skills/SkillDataSource"

// jest.mock("../../skills/SkillDataSource.js")

let dataSource = new SkillDataSource()

let obj = new Skill(dataSource)

test("skills.list lists all current skills", async () => {
  let skills = await obj.list()
  expect(skills.length).toBeGreaterThan(0)
})

test("skills.read returns a skill", async () => {
  let skill = await obj.read("receR1F8GumrjWrVI")
  expect(skill.id).toBe("receR1F8GumrjWrVI")
})
