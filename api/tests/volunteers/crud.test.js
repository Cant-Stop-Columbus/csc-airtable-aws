import { create, list, read } from '../../volunteers/crud.js'

jest.mock("../../volunteers/airtableDataSource.js")

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.create creates volunteers", async () => {
  let event = {
    body: JSON.stringify({
      firstName: "Mark",
      lastName: "Harris"
    })
  }

  let retval = await create(event, context)
  expect(retval.statusCode).toEqual(200)
})

test("crud.list lists all volunteers", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  expect(retval.statusCode).toBe(200)
})

test("crud.read lists all volunteers", async () => {
  let event = {
    pathParameters: {
      id: 1
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
})
