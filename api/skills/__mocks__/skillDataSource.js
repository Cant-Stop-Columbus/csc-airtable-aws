export default class AirtableDataSource {
  list(offset = null) {
    return [
      {
        _table: {
          _base: {
            _airtable: {
              requestTimeout: 300000
            },
            _id: "appEy2iTLwkkVlSjn"
          },
          id: null,
          name: "Skills"
        },
        id: "receR1F8GumrjWrVI",
        _rawJson: {
          id: "receR1F8GumrjWrVI",
          fields: {
            Skill: "3D Printing",
            People: [
              "recZWJl18KmeDLtjY",
              "recxbyNqpNs14iZLw",
              "recPwNwmWLj6QiWMw",
              "reczrnx8VYuzppr1X",
              "reck1f8pbNU29deFN",
              "recFoIVqD8cSddn5h",
              "recs3vlsI7vvv2VRa",
              "recBDNTsADwEGP36a"
            ],
            Ideas: ["recvO5LQKVJ7YsSAL"],
            "# of Volunteers": 8
          },
          createdTime: "2020-03-29T19:40:56.000Z"
        },
        fields: {
          Skill: "3D Printing",
          People: [
            "recZWJl18KmeDLtjY",
            "recxbyNqpNs14iZLw",
            "recPwNwmWLj6QiWMw",
            "reczrnx8VYuzppr1X",
            "reck1f8pbNU29deFN",
            "recFoIVqD8cSddn5h",
            "recs3vlsI7vvv2VRa",
            "recBDNTsADwEGP36a"
          ],
          Ideas: ["recvO5LQKVJ7YsSAL"],
          "# of Volunteers": 8
        }
      },
      {
        _table: {
          _base: {
            _airtable: {
              requestTimeout: 300000
            },
            _id: "appEy2iTLwkkVlSjn"
          },
          id: null,
          name: "Skills"
        },
        id: "recRb0IttaJXxnhd0",
        _rawJson: {
          id: "recRb0IttaJXxnhd0",
          fields: {
            Skill: "Animation",
            People: [
              "recIjexKp1SOZksZi",
              "recw0dlJUxhhjtEqb",
              "reckVBfEnwqW2NcF4",
              "rec1ufquqYDImaPbO",
              "recwoBJXeB5maaTCn",
              "recKzFgY0w4mmyNJP"
            ],
            Ideas: ["recnpi3esTNej3SME", "recfA2BLjJH8aUc4f"],
            "# of Volunteers": 6
          },
          createdTime: "2020-03-22T13:45:13.000Z"
        },
        fields: {
          Skill: "Animation",
          People: [
            "recIjexKp1SOZksZi",
            "recw0dlJUxhhjtEqb",
            "reckVBfEnwqW2NcF4",
            "rec1ufquqYDImaPbO",
            "recwoBJXeB5maaTCn",
            "recKzFgY0w4mmyNJP"
          ],
          Ideas: ["recnpi3esTNej3SME", "recfA2BLjJH8aUc4f"],
          "# of Volunteers": 6
        }
      },
      {
        _table: {
          _base: {
            _airtable: {
              requestTimeout: 300000
            },
            _id: "appEy2iTLwkkVlSjn"
          },
          id: null,
          name: "Skills"
        },
        id: "reckmGixnY7GX19YF",
        _rawJson: {
          id: "reckmGixnY7GX19YF",
          fields: {
            Skill: "Audio Editing",
            People: [
              "recZAaVArd1hafUMU",
              "rec0Eh4AESJBSMlza",
              "recTXFErElHUxknNZ",
              "rectANxl3As6z56gz",
              "recoroZY9ItuXb9n7",
              "recGAVl8tl2LZdvDG",
              "recngcWDIVv5dXJLo",
              "recR5uBPpD8zMZp5W",
              "rec3GxR97EWK1cmmR",
              "recPdGqgpOWuFp1eS",
              "recJUxFSb0eBe3zce",
              "rec1ufquqYDImaPbO",
              "recPwNwmWLj6QiWMw",
              "recl9n5HkXqqFa2XF",
              "recyO242tZGJ6Tbby"
            ],
            "# of Volunteers": 15
          },
          createdTime: "2020-03-17T01:21:09.000Z"
        },
        fields: {
          Skill: "Audio Editing",
          People: [
            "recZAaVArd1hafUMU",
            "rec0Eh4AESJBSMlza",
            "recTXFErElHUxknNZ",
            "rectANxl3As6z56gz",
            "recoroZY9ItuXb9n7",
            "recGAVl8tl2LZdvDG",
            "recngcWDIVv5dXJLo",
            "recR5uBPpD8zMZp5W",
            "rec3GxR97EWK1cmmR",
            "recPdGqgpOWuFp1eS",
            "recJUxFSb0eBe3zce",
            "rec1ufquqYDImaPbO",
            "recPwNwmWLj6QiWMw",
            "recl9n5HkXqqFa2XF",
            "recyO242tZGJ6Tbby"
          ],
          "# of Volunteers": 15
        }
      }
    ]
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
