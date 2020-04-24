import Measurement from "../../measurements/Measurement"
import MeasurementDataSource from "../../measurements/MeasurementDataSource"

if (process.env.MOCK) {
  jest.mock("../../Measurements/MeasurementDataSource.js")
}

let obj = new Measurement(new MeasurementDataSource())

test("not implemented", () => {
  expect(true)
})

// test("measurements.list lists all current measurements", async () => {
//   let measurements = await obj.list()
//   expect(measurements.length).toBeGreaterThan(0)
// })

// test("measurements.read returns a measurement", async () => {
//   let activity = await obj.read("recOO4L9vnSgojj9d")
//   expect(activity.id).toBe("recOO4L9vnSgojj9d")
// })
