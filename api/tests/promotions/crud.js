let crud = require('../../promotions/crud')

let event = {
  body: "Business=Mark's Happy Test Business Tuesday&Promo=Mark's promotional text to delete later&Website=https://www.cantstopcolumbus.com"
}

let context = {
  awsRequestId: "request-id-1"
}

crud.create(event, context, (ignore, body) => {
  console.log(JSON.stringify(body))
})
