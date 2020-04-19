import { list, read } from '../../partners/crud.js'

if (process.env.MOCK === "1") {
  jest.mock("../../partners/PartnerDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.list lists all partners", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  let body = JSON.parse(retval.body)
  expect(retval.statusCode).toBe(200)
  expect(body.length).toBeGreaterThan(1)
  expect(body[0].Partner).toBeTruthy()
})

test("crud.read reads a particular project", async () => {
  let event = {
    pathParameters: {
      id: "recT73BdFGFXYcTRn"
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
  let body = JSON.parse(retval.body)
  expect(body.Partner).toBeTruthy()
})
