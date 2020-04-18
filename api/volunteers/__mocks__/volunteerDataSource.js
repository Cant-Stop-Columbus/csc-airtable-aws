export default class VolunteerDataSource {
  list(offset = null) {
    return {
      records: [
        {
          id: "recOvjyVL8l2aL3sJ",
          fields: {
            "Full Name": " ",
            Added: "2020-04-15T20:17:00.000Z"
          },
          createdTime: "2020-04-15T20:17:00.000Z"
        },
        {
          id: "recxjfpf7NPBcQuzp",
          fields: {
            "Available hours/week": 0,
            "Full Name": " ",
            Added: "2020-04-15T20:21:16.000Z"
          },
          createdTime: "2020-04-15T20:21:16.000Z"
        },
        {
          id: "recankqzWc3jijYHw",
          fields: {
            "Primary Email": "aaronansari@gmail.com",
            Phone: "(614) 798-8828",
            LinkedIn: "https://www.linkedin.com/in/aaronansari/",
            "First Name": "Aaron",
            "Last Name": "Ansari",
            City: "Dublin",
            State: "Ohio",
            Skills: ["recFaclOv8Cj99q2a"],
            "Talent notes":
              "I'm an endurance athlete - Ironman, marathoner and mountain climber.",
            "I am interested in contributing my skills to ...": [
              "Mentoring",
              "Giving a remote talk"
            ],
            Passions: ["recTAnlZs3n31fBH7", "recmlBqJJ8V97o9Wg"],
            "Full Name": "Aaron Ansari",
            Added: "2020-03-27T01:40:40.000Z"
          },
          createdTime: "2020-03-27T01:40:40.000Z"
        }
      ],
      offset: "recankqzWc3jijYHw"
    }
  }

  create(person) {
    let retval = [
      {
        id: "recankqzWc3jijYHw",
        fields: {
          "Primary Email": "aaronansari@gmail.com",
          Phone: "(614) 798-8828",
          LinkedIn: "https://www.linkedin.com/in/aaronansari/",
          "First Name": "Aaron",
          "Last Name": "Ansari",
          City: "Dublin",
          State: "Ohio",
          Skills: ["recFaclOv8Cj99q2a"],
          "Talent notes":
            "I'm an endurance athlete - Ironman, marathoner and mountain climber.",
          "I am interested in contributing my skills to ...": [
            "Mentoring",
            "Giving a remote talk"
          ],
          Passions: ["recTAnlZs3n31fBH7", "recmlBqJJ8V97o9Wg"],
          "Full Name": "Aaron Ansari",
          Added: "2020-03-27T01:40:40.000Z"
        },
        createdTime: "2020-03-27T01:40:40.000Z"
      }
    ]
    return retval
  }

  read(id) {
    return {
      id: id,
      fields: {
        "Primary Email": "aaronansari@gmail.com",
        Phone: "(614) 798-8828",
        LinkedIn: "https://www.linkedin.com/in/aaronansari/",
        "First Name": "Aaron",
        "Last Name": "Ansari",
        City: "Dublin",
        State: "Ohio",
        Skills: ["recFaclOv8Cj99q2a"],
        "Talent notes":
          "I'm an endurance athlete - Ironman, marathoner and mountain climber.",
        "I am interested in contributing my skills to ...": [
          "Mentoring",
          "Giving a remote talk"
        ],
        Passions: ["recTAnlZs3n31fBH7", "recmlBqJJ8V97o9Wg"],
        "Full Name": "Aaron Ansari",
        Added: "2020-03-27T01:40:40.000Z"
      },
      createdTime: "2020-04-15T20:21:16.000Z"
    }
  }

  update(id, info) {
    return {
      id: id,
      fields: info,
      createdTime: "2020-04-15T20:21:16.000Z"
    }
  }

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
