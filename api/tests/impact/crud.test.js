import { list, read } from '../../impact/crud.js'

if (process.env.MOCK) {
  jest.mock("../../impact/ImpactDataSource.js")
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

test("crud.list lists all impact", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toBe(200)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0]["Impact Area"]).toBeTruthy()
})

test("crud.read reads a particular impact", async () => {
  let event = {
    pathParameters: {
      id: await getId()
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body["Impact Area"]).toBeTruthy()
  expect(body.id).toBe(event.pathParameters.id)
})
