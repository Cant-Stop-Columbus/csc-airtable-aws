import { list, read } from '../../measurements/crud.js'

if (process.env.MOCK === "1") {
  jest.mock("../../measurements/MeasurementDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("not implemented", () => {
  expect(true)
})

// test("crud.list lists all measurements", async () => {
//   let event = {
//     body: null
//   }
//   let retval = await list(event, context)
//   let body = JSON.parse(retval.body)
//   expect(retval.statusCode).toBe(200)
//   expect(body.length).toBeGreaterThan(1)
//   expect(body[0]["Title"]).toBeTruthy()
// })

// test("crud.read reads a particular measurement", async () => {
//   let event = {
//     pathParameters: {
//       id: "recOO4L9vnSgojj9d"
//     },
//     body: null
//   }
//   let retval = await read(event, context)
//   expect(retval.statusCode).toBe(200)
//   let body = JSON.parse(retval.body)
//   expect(body["Title"]).toBeTruthy()
// })
