import { list, read } from '../../activities/crud.js'

if (process.env.MOCK === 1) {
  jest.mock("../../activities/ActivityDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.list lists all activities", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toBe(200)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0]["Activity"]).toBeTruthy()
})

test("crud.read reads a particular activity", async () => {
  let event = {
    pathParameters: {
      id: "rectcoBS7nwkJspXB"
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body["Activity"]).toBeTruthy()
})
