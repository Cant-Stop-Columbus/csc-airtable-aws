import Impact from "../../Impact/Impact"
import ImpactDataSource from "../../Impact/ImpactDataSource"

if (process.env.MOCK) {
  jest.mock("../../impact/ImpactDataSource.js")
}

let obj = new Impact(new ImpactDataSource())

test("impacts.list lists all current impacts", async () => {
  let impacts = await obj.list()
  expect(impacts.length).toBeGreaterThan(0)
})

test("impacts.read returns an impact", async () => {
  let impacts = await obj.list()
  let impactId = impacts[0].id
  let impact = await obj.read(impactId)
  expect(impact.id).toBe(impactId)
})
