import Volunteer from "../../volunteers/Volunteer"
import Skill from "../../skills/Skill"
import VolunteerDataSource from "../../volunteers/VolunteerDataSource"
import SkillDataSource from "../../skills/SkillDataSource"

if (process.env.MOCK) {
  jest.mock("../../volunteers/VolunteerDataSource.js")
}

let vol = new Volunteer(new VolunteerDataSource())
let skill = new Skill(new SkillDataSource())

function randoString() {
  return `random-${Math.floor(Math.random()*1000)}`
}

test("volunteers.create creates a volunteer", async () => {
  let person = {
    "First Name": randoString(),
    "Last Name": randoString()
  }
  let volunteer = await vol.create(person)
  expect(volunteer["First Name"]).toBe(person["First Name"])
})

test("volunteers.list lists all current volunteers", async () => {
  let volunteer = await vol.list()
  expect(volunteer.length).toBeGreaterThan(0)
})

test("volunteers.read returns a volunteer", async () => {
  let volunteers = await vol.list()
  let volunteerId = volunteers[0].id
  let volunteer = await vol.read(volunteerId)
  expect(volunteer.id).toBe(volunteerId)
  expect(volunteer["Primary Email"]).toBeTruthy()
})

test("volunteers.update updates a volunteer", async () => {
  let skills = await skill.list()
  expect(skills.length).toBeGreaterThan(1)

  let person = {
    "First Name": randoString(),
    "Last Name": randoString(),
    "Primary Email": randoString(),
    Skills: [skills[0].id]
  }
  let volunteer = await vol.create(person)
  expect(volunteer["Primary Email"]).toBe(person["Primary Email"])
  expect(volunteer.Skills.length).toBe(1)

  person["Primary Email"] = "mark.harris@gmail.com"
  person.Skills.push(skills[1].id)
  expect(person.Skills.length).toBe(2)
  
  let updatedVolunteer = await vol.update(volunteer.id, person)
  let skillz = updatedVolunteer.Skills.filter((elem) => elem == skills[1].id)
  expect(updatedVolunteer.Skills.length).toBe(2)
  expect(skillz[0]).toBe(skills[1].id)
})