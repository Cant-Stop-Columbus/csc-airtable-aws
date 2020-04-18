import handler from "../lib/handler-lib"
import Promotion from "./Promotion"
import PromotionDataSource from "./PromotionDataSource"

let promotion = new Promotion(new PromotionDataSource())

let create = handler(async (event, context) => {
  const data = JSON.parse(event.body)
  let retval = await promotion.create(data)
  return retval
})

let list = handler(async (event, context) => {
  let retval = await promotion.list()
  return retval
})

export { create, list }
