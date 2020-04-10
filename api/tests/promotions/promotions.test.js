import { Promotion } from "../../promotions/Promotion"

let promo = new Promotion()

test("Promotions.create creates a promotion", async () => {
  let retval = await promo.create(
    "marks happy business",
    "this is promotional text",
    "https://www.cantstopcolumbus.com"
  )
  expect(retval.length).toBeGreaterThan(0)
})

test("Promotions.list lists all current promotions", async () => {
  let retval = await promo.list()
  expect(retval.length).toBeGreaterThan(0)
})
