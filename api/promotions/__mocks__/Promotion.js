export default class Promotion {
  constructor() {}

  list() {
    return [
      {
        id: "rec6nsQLBeXlMYLv3",
        fields: {
          Business: "Walmart",
          Promo: "Test!",
          Website: "https://www.google.com"
        },
        createdTime: "2020-04-07T18:43:51.000Z"
      },
      {
        id: "recREdSfzuOmAGAdT",
        fields: {
          Business: "Walmart",
          Promo: "Test!",
          Website: "https://www.google.com"
        },
        createdTime: "2020-04-07T18:47:51.000Z"
      }
    ]
  }

  create(business, text, url) {
    return {
      Business: business,
      Promo: text,
      Website: url
    }
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
