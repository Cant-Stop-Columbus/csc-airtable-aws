import { list, read } from '../../skills/crud.js'

// jest.mock("../../skills/SkillDataSource.js")

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
  let event = {
    pathParameters: {
      id: "receR1F8GumrjWrVI"
    },
    body: null
  }
  let retval = await read(event, context)
  expect(retval.statusCode).toBe(200)
})
