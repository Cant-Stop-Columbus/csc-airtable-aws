import { list, read } from '../../activities/crud.js'

if (process.env.MOCK) {
  jest.mock("../../activities/ActivityDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

let getActivity = async () => {
  let retval = await list({body: null}, context)
  expect(retval.statusCode).toBe(200)
  expect(retval.body).toBeTruthy()
  var body = JSON.parse(retval.body)
  return body[0].id
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
      id: await getActivity()
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body["Activity"]).toBeTruthy()
  expect(body.id).toBe(event.pathParameters.id)
})
