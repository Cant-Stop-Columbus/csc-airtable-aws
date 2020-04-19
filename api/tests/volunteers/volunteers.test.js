import Volunteer from "../../volunteers/Volunteer"
import VolunteerDataSource from "../../volunteers/VolunteerDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../volunteers/VolunteerDataSource.js")
}

let vol = new Volunteer(new VolunteerDataSource())

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
  let volunteer = await vol.read("recpY8sstGLCVaXSp")
  expect(volunteer.id).toBe("recpY8sstGLCVaXSp")
  expect(volunteer["Primary Email"]).toBe("aaronansari@gmail.com")
})

test("volunteers.update updates a volunteer", async () => {
  let person = {
    "First Name": randoString(),
    "Last Name": randoString(),
    "Primary Email": randoString(),
    Skills: ["receR1F8GumrjWrVI"]
  }
  let volunteer = await vol.create(person)
  expect(volunteer["Primary Email"]).toBe(person["Primary Email"])
  expect(volunteer.Skills.length).toBe(1)

  person["Primary Email"] = "mark.harris@gmail.com"
  person.Skills.push("recRb0IttaJXxnhd0")
  expect(person.Skills.length).toBe(2)
  
  let updatedVolunteer = await vol.update(volunteer.id, person)
  let skillz = updatedVolunteer.Skills.filter((elem) => elem == "recRb0IttaJXxnhd0")
  expect(updatedVolunteer.Skills.length).toBe(2)
  expect(skillz[0]).toBe("recRb0IttaJXxnhd0")
})