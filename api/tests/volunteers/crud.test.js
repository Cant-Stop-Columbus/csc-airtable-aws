import { create, list, read } from '../../volunteers/crud.js'

jest.mock("../../volunteers/VolunteerDataSource.js")

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.create creates volunteers", async () => {
  let event = {
    body: JSON.stringify({
      "First Name": "Mark",
      "Last Name": "Harris"
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
  let body = JSON.parse(retval.body)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0]["Full Name"]).toBeTruthy()
  expect(retval.statusCode).toBe(200)
})

test("crud.read returns a particular volunteer", async () => {
  let event = {
    pathParameters: {
      id: 1
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body.id).toBe(1)
})
