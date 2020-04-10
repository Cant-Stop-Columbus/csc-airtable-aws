'use strict'

import handler from "../lib/handler-lib.mjs"
import Promotion from "./Promotion.js"

let create = handler(async (event, context) => {
  const data = JSON.parse(event.body)

  let promotion = new Promotion()
  let retval = await promotion.create(data.Business, data.Promo, data.Website)
  return retval
})

export {
  create
}
