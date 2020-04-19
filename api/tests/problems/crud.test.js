import { list, read } from '../../problems/crud.js'

jest.mock("../../problems/ProblemDataSource.js")

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.list lists all problems", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toBe(200)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0]["Problem Brief"]).toBeTruthy()
})

test("crud.read reads a particular Problem", async () => {
  let event = {
    pathParameters: {
      id: "rectVFkzwNnY9LuKw"
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body["Problem Brief"]).toBeTruthy()
})
