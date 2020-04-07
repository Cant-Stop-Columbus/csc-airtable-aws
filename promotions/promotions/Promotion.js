'use strict'

const airtable = require('airtable')
let Response = require('../helpers/responses')

class Promotion {
  constructor() {
    this.base = airtable.base(process.env.AIRTABLE_BASE)
  }

  // list() {
  //   return null
  // }

  create(business, text, url) {
    return this.base(process.env.PROMOTIONS_VIEW)
      .create([
        {
          fields: {
            Business: business,
            Promo: text,
            Website: url
          }
        }
      ])
      .then((result) => {
        return new Response(true, 201, result)
      })
      .catch((err) => {
        return new Response(false, err.statusCode, result)
      })
  }

  // read(id) {
  //   const params = {
  //     TableName: this.tableName,
  //     Key: {
  //       id: id,
  //     },
  //   }
  //   return this.db.get(params).promise()
  // }

  // update(id, info) {
  //   // update the data with appropriate identifiers
  //   const timestamp = new Date().getTime()

  //   var params = {
  //     TableName: this.tableName,
  //     Key: {
  //       id: id,
  //     },
  //     UpdateExpression:
  //       'set competitors = :comp, updatedAt = :updatedAt, #loc = :loc, title = :title',
  //     ExpressionAttributeValues: {
  //       ':comp': info.competitors,
  //       ':loc': info.location,
  //       ':title': info.title,
  //       ':updatedAt': timestamp,
  //     },
  //     ExpressionAttributeNames: {
  //       '#loc': 'location',
  //     },
  //     ReturnValues: 'ALL_NEW',
  //   }
  //   return this.db.update(params).promise()
  // }

  // delete(id) {
  //   const params = {
  //     TableName: this.tableName,
  //     Key: {
  //       id: id,
  //     },
  //   }
  //   return this.db.delete(params).promise()
  // }
}

module.exports = Promotion
