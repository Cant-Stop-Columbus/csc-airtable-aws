import { create, list } from '../../promotions/crud.js'

jest.mock("../../promotions/airtableDataSource.js")

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.create creates promotions", async () => {
  let event = {
    body: JSON.stringify({
      Business: "Mark's happy test business tuesday",
      Promo: "Mark's promotional text to delete later",
      Website: "https://www.cantstopcolumbus"
    })
  }

  let retval = await create(event, context)
  expect(retval.statusCode).toEqual(200)
})

test("crud.list lists all promotions", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  expect(retval.statusCode).toBe(200)
})
