import { list, read } from '../../projects/crud.js'

if (process.env.MOCK) {
  jest.mock("../../projects/ProjectDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

let getId = async () => {
  let retval = await list({body: null}, context)
  expect(retval.statusCode).toBe(200)
  expect(retval.body).toBeTruthy()
  var body = JSON.parse(retval.body)
  return body[0].id
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
      id: await getId()
    }
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body.Title).toBeTruthy()
  expect(body.id).toBe(event.pathParameters.id)
})
