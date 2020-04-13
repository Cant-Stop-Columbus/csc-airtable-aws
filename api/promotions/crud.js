import handler from "../lib/handler-lib"
import Promotion from "./Promotion"

let promotion = new Promotion()

let create = handler(async (event, context) => {
  const data = JSON.parse(event.body)
  let retval = await promotion.create(
    data.Business, data.Promo, data.Website
    )
  return retval
})

let list = handler(async (event, context) => {
  let retval = await promotion.list()
  return retval
})

export { create, list }
