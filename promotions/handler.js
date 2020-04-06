'use strict'
const axios = require('axios')
const querystring = require('querystring')

module.exports.writeToAirtable = (event, context, callback) => {
  console.log('*** MADE IT TO THE INVOKATION ***')

  const base = require('airtable').base('apppXeg0e2C1iuT8u')

  const data = querystring.parse(event.body)
  console.log(`creating record for business: ${data.Business}, ${data.Promo}, ${data.Website}`)

  base('10TV Promos').create(
    [
      {
        fields: {
          Business: data.Business,
          Promo: data.Promo,
          Website: data.Website
        }
      }
    ],
    function (err, records) {
      if (err) {
        console.error('*** Error posting to Airtable ' + err)
        callback(null, {
          statusCode: 400,
          body: JSON.stringify(err)
        })
      } else {
        console.log(`successfully added ${data.Business} to table`)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            message: `successfully added ${data.Business} to table`
          })
        })  
      }
    }
  )
}
