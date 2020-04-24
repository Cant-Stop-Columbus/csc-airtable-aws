import { list, read } from '../../categories/crud.js'

if (process.env.MOCK) {
  jest.mock("../../categories/CategoryDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

let getCategoryId = async () => {
  let retval = await list({body: null}, context)
  expect(retval.statusCode).toBe(200)
  expect(retval.body).toBeTruthy()
  var body = JSON.parse(retval.body)
  return body[0].id
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
  expect(body[0].Ideas).toBeTruthy()
  expect(body[0].People).toBeTruthy()
})

test("crud.read reads a particular category", async () => {
  let event = {
    pathParameters: {
      id: await getCategoryId()
    }
  }
  let category = await read(event, context)
  expect(category.statusCode).toBe(200)
  expect(category.body).toBeTruthy()
  var body = JSON.parse(category.body)
  expect(body.id).toBe(event.pathParameters.id)
  expect(body.Category).toBeTruthy()
  expect(body.Ideas).toBeTruthy()
  expect(body.People).toBeTruthy()
})
