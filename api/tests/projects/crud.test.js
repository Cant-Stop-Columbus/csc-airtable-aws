import { list, read } from '../../projects/crud.js'

jest.mock("../../projects/ProjectDataSource.js")

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.list lists all projects", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toBe(200)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0].Title).toBeTruthy()
})

test("crud.read reads a particular project", async () => {
  let event = {
    pathParameters: {
      id: "recJOmjpwWgofI4d0"
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body.Title).toBeTruthy()
})
