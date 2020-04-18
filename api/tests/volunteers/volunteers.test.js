import Volunteer from "../../volunteers/Volunteer"
import AirtableDataSource from "../../volunteers/volunteerDataSource"
import AirtableTransformer from "../../volunteers/airtableTransformer"

jest.mock("../../volunteers/volunteerDataSource.js")

let dataSource = new AirtableDataSource()
let transformer = new AirtableTransformer()

let vol = new Volunteer(dataSource, transformer)

test("volunteers.create creates a volunteer", async () => {
  let person = {
    firstName: "doesnt",
    lastName: "matter"
  }
  let retval = await vol.create(person)
  expect(retval["First Name"]).toBe("Aaron")
})

test("volunteers.list lists all current volunteers", async () => {
  let retval = await vol.list()
  expect(retval.length).toBeGreaterThan(0)
  expect(retval[2]["First Name"]).toBe("Aaron")
})

test("volunteers.read returns a volunteer", async () => {
  let retval = await vol.read(1)
  expect(retval["Primary Email"]).toBe("aaronansari@gmail.com")
})
