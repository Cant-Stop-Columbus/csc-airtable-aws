'use strict'

let Promotion = require('./Promotion')
let rsp = require('../helpers/responses')
const querystring = require('querystring')

let create = (event, context, callback) => {
  const data = querystring.parse(event.body)
  console.log(`create: ${data.Business}, ${data.Promo}, ${data.Website}`)
  let promotion = new Promotion()
  promotion.create(data.Business, data.Promo, data.Website)
    .then((retval) => {
      retval.respond(context, callback)
    })
    .catch((retval) => {
      retval.respond(context, callback)
    })

}

module.exports = {
  create: create
}
