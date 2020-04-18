export default class PromotionDataSource {
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

  create(data) {
    let retval = [
      {
        id: "123456",
        fields: {
          Business: data.Business,
          Promo: data.Promo,
          Website: data.Website
        }
      }
    ]
    return retval
  }
}
