import Promotion from "../../promotions/Promotion"
import airtableDataSource from "../../promotions/airtableDataSource"
import airtableTransformer from "../../promotions/airtableTransformer"

jest.mock("../../promotions/airtableDataSource.js")

let dataSource = new airtableDataSource()
let transformer = new airtableTransformer()

let promo = new Promotion(dataSource, transformer)

test("Promotions.create creates a promotion", async () => {
  let biz = "marks happy business"
  let text = "this is promotional text -- delete me"
  let url = "https://www.cantstopcolumbus.com"

  let retval = await promo.create(biz, text, url)
  expect(retval.Business).toBe(biz)
  expect(retval.Promo).toBe(text)
  expect(retval.Website).toBe(url)
})

test("Promotions.list lists all current promotions", async () => {
  let retval = await promo.list()
  expect(retval.length).toBeGreaterThan(0)
  expect(retval[0].Business).toBe("Walmart")
})
