import Promotion from "../../promotions/Promotion"
import PromotionDataSource from "../../promotions/PromotionDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../promotions/PromotionDataSource.js")
}

let promo = new Promotion(new PromotionDataSource())

test("Promotions.create creates a promotion", async () => {
  let data = {
    Business: "marks happy business",
    Promo: "this is promotional text -- delete me",
    Website: "https://www.cantstopcolumbus.com"
  }

  let retval = await promo.create(data)
  expect(retval.Business).toBe(data.Business)
  expect(retval.Promo).toBe(data.Promo)
  expect(retval.Website).toBe(data.Website)
})

test("Promotions.list lists all current promotions", async () => {
  let retval = await promo.list()
  expect(retval.length).toBeGreaterThan(0)
  expect(retval[0].Business).toBe("Business1")
})
