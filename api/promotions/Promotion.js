import * as airtable from "airtable"

const VIEW = process.env.PROMOTIONS_VIEW

export class Promotion {
  constructor() {
    this.base = airtable.base(process.env.AIRTABLE_BASE)
  }

  list() {
    // returns a promise that resolves to the list of promotions
    return this.base(VIEW)
      .select({
        view: "Grid view",
        maxRecords: 100,
        sort: [{ field: "Business", direction: "desc" }]
      })
      .firstPage()
  }

  create(business, text, url) {
    // returns a promise that resolves to the promotion just created
    return this.base(VIEW)
      .create([
        {
          fields: {
            Business: business,
            Promo: text,
            Website: url
          }
        }
      ])
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
