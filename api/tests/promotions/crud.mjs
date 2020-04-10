import { create } from '../../promotions/crud.mjs'

let eventBody = {
  Business: "Mark's happy test business tuesday",
  Promo: "Mark's promotional text to delete later",
  Website: "https://www.cantstopcolumbus"
}

let event = {
  body: JSON.stringify(eventBody)
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

create(event, context)
  .then((retval) => {
  console.log(JSON.stringify(retval))
})
