import { list, read } from '../../skills/crud.js'

if (process.env.MOCK === "1") {
  jest.mock("../../skills/SkillDataSource.js")
}

let context = {
  awsRequestId: "request-id-1",
  getRemainingTimeInMillis: () => { return 4000 }
}

test("crud.list lists all skills", async () => {
  let event = {
    body: null
  }
  let retval = await list(event, context)
  expect(retval.statusCode).toBe(200)
})

test("crud.read reads a particular skill", async () => {
  let retval = await list({body: null}, context)
  expect(retval.statusCode).toBe(200)
  expect(retval.body).toBeTruthy()
  var body = JSON.parse(retval.body)
  let skillId = body[0].id

  let event = {
    pathParameters: {
      id: skillId
    },
    body: null
  }

  let skill = await read(event, context)
  expect(skill.statusCode).toBe(200)
  body = JSON.parse(skill.body)
  expect(body.id).toBe(skillId)
})
