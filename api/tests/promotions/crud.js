let crud = require('../../promotions/crud')

let eventBody = {
  Business: "Mark's happy test business tuesday",
  Promo: "Mark's promotional text to delete later",
  Website: "https://www.cantstopcolumbus"
}

let event = {
  body: JSON.stringify(eventBody)
}

let context = {
  awsRequestId: "request-id-1"
}

crud.create(event, context, (ignore, body) => {
  console.log(JSON.stringify(body))
})
