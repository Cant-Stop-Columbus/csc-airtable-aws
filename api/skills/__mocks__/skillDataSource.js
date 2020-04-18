export default class AirtableDataSource {
  list(offset = null) {
    return {
      records: [
        {
          id: "recZgdDf90E8G5sKP",
          fields: {
            Skill: "3D Printing",
            People: [
              "recKlVj8BgEV0Uu85",
              "reciAKLxSjKIrr0AD",
              "recAVZutphBNdrXBD",
              "reckQzvfouMgMysQ4",
              "rec5qr6wEjcJwmfuU",
              "recqNUTx6EuzAmoUo",
              "recdsHjzbDNcSbWGh",
              "recm2ZRz39Ol3Y4Vh"
            ],
            Ideas: ["recgdhJXdr1OlBTpS"],
            "# of Volunteers": 8
          },
          createdTime: "2020-03-29T19:40:56.000Z"
        },
        {
          id: "recCAcGAWG1EUwi27",
          fields: {
            Skill: "Animation",
            People: [
              "rectIqvRSxavmttOp",
              "rechppjQn3zYGCFfi",
              "rec5kNdLQ2IDpWdub",
              "recMTroBTuVpJjQ0V",
              "rechNNH4H7n3xjUru",
              "recvYRe5t2m3JHOyW"
            ],
            Ideas: ["rec8Ou1lVp5VGcTBL", "rec0ZezSMfZPx3dTm"],
            "# of Volunteers": 6
          },
          createdTime: "2020-03-22T13:45:13.000Z"
        },
        {
          id: "rec5LSgEQupnkaaNM",
          fields: {
            Skill: "Audio Editing",
            People: [
              "recKZmTHUJjYxoVB1",
              "recL3t2H7o1ifVmoh",
              "recEmRCy7RZBUtoC6",
              "receZZvsw6KNWe75G",
              "rec9QAX5CeLbkkace",
              "recrZ7jfWRksmmwsN",
              "rec8FoUKbrNMA6KAv",
              "recCuGzWS9qg98qU3",
              "recO5JPgAaerolnbY",
              "recACSonSkeb2y23Z",
              "recujJDZEwwiBcA1l",
              "recMTroBTuVpJjQ0V",
              "recAVZutphBNdrXBD",
              "rec6yz3ONtI72j3MM",
              "recjde29WvYqt2c0F"
            ],
            "# of Volunteers": 15
          },
          createdTime: "2020-03-17T01:21:09.000Z"
        }
      ],
      offset: "rec5LSgEQupnkaaNM"
    }
  }

  read(id) {
    return {
      id: id,
      fields: {
        Skill: "3D Printing",
        People: [
          "recKlVj8BgEV0Uu85",
          "reciAKLxSjKIrr0AD",
          "recAVZutphBNdrXBD",
          "reckQzvfouMgMysQ4",
          "rec5qr6wEjcJwmfuU",
          "recqNUTx6EuzAmoUo",
          "recdsHjzbDNcSbWGh",
          "recm2ZRz39Ol3Y4Vh"
        ],
        Ideas: ["recgdhJXdr1OlBTpS"],
        "# of Volunteers": 8
      },
      createdTime: "2020-03-29T19:40:56.000Z"
    }
  }
}
