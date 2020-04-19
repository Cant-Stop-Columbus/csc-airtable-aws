import { list, read } from '../../categories/crud.js'

// jest.mock("../../categories/CategoryDataSource.js")

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.list lists all categories", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toBe(200)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0].Category).toBeTruthy()
  expect(body[0].Problems).toBeTruthy()
})

test("crud.read reads a particular category", async () => {
  let event = {
    pathParameters: {
      id: "recTmfe06GL1UuMCJ"
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body.Category).toBeTruthy()
  expect(body.Problems).toBeTruthy()
})
