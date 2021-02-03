import { create, list, read } from '../../volunteers/crud.js'
import volunteer from './volunteer'

if (process.env.MOCK) {
  jest.mock("../../volunteers/VolunteerDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

let randoString = () => {
  return `random-${Math.floor(Math.random()*1000)}`
}

let getId = async () => {
  let retval = await list({body: null}, context)
  expect(retval.statusCode).toBe(200)
  expect(retval.body).toBeTruthy()
  var body = JSON.parse(retval.body)
  return body[0].id
}

test("crud.create creates volunteers without photos", async () => {
  let firstName = randoString()
  let event = {
    body: JSON.stringify({
      "First Name": firstName,
      "Last Name": randoString()
    })
  }

  let retval = await create(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toEqual(200)
  expect(body["First Name"]).toBe(firstName)
})

test("crud.create creates volunteers with photos", async () => {

  let firstName = randoString()
  let event = {
    body: JSON.stringify({
      "First Name": firstName,
      "Last Name": randoString()
    })
  }

  let retval = await create(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toEqual(200)
  expect(body["First Name"]).toBe(firstName)
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
      id: await getId()
    }
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body.id).toBe(event.pathParameters.id)
})
