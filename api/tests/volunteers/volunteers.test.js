import Volunteer from "../../volunteers/Volunteer"
import VolunteerDataSource from "../../volunteers/VolunteerDataSource"

jest.mock("../../volunteers/VolunteerDataSource.js")

let vol = new Volunteer(new VolunteerDataSource())

test("volunteers.create creates a volunteer", async () => {
  let person = {
    "First Name": "doesnt",
    "Last Name": "matter"
  }
  let volunteer = await vol.create(person)
  expect(volunteer["First Name"]).toBe("Aaron")
})

test("volunteers.list lists all current volunteers", async () => {
  let volunteer = await vol.list()
  expect(volunteer.length).toBeGreaterThan(0)
  expect(volunteer[2]["First Name"]).toBe("Aaron")
})

test("volunteers.read returns a volunteer", async () => {
  let volunteer = await vol.read("recxjfpf7NPBcQuzp")
  expect(volunteer.id).toBe("recxjfpf7NPBcQuzp")
  expect(volunteer["Primary Email"]).toBe("aaronansari@gmail.com")
})

test("volunteers.update updates a volunteer", async () => {
  let volunteer = await vol.read("recxjfpf7NPBcQuzp")
  expect(volunteer.id).toBe("recxjfpf7NPBcQuzp")
  expect(volunteer["Primary Email"]).toBe("aaronansari@gmail.com")
  expect(volunteer.Skills.length).toBe(1)

  volunteer["Primary Email"] = "mark.harris@gmail.com"
  volunteer.Skills.push("abc123-this-is-a-skill-id")
  expect(volunteer.Skills.length).toBe(2)
  let updatedVolunteer = await vol.update(volunteer.id, volunteer)
  let skillz = updatedVolunteer.Skills.filter((elem) => elem == "abc123-this-is-a-skill-id")
  expect(updatedVolunteer.Skills.length).toBe(2)
  expect(skillz[0]).toBe("abc123-this-is-a-skill-id")
})