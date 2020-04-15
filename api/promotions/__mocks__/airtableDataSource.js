export default class AirtableDataSource {
  list() {
    return {
      records: [
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
        },
        {
          id: "rec2OUESovJ5juirM",
          fields: {
            Business: "Test",
            Promo: "test",
            Website: "https://www.test.com"
          },
          createdTime: "2020-04-07T18:50:00.000Z"
        }
      ],
      offset: "rec2OUESovJ5juirM"
    }
  }

  create(business, text, url) {
    let retval = [
      {
        id: "123456",
        fields: {
          Business: business,
          Promo: text,
          Website: url
        }
      }
    ]
    return retval
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
