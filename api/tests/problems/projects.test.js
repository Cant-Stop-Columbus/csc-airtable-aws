import Problem from "../../Problems/Problem"
import ProblemDataSource from "../../Problems/ProblemDataSource"

// jest.mock("../../Problems/ProblemDataSource.js")

let obj = new Problem(new ProblemDataSource())

test("Problems.list lists all current Problems", async () => {
  let Problems = await obj.list()
  expect(Problems.length).toBeGreaterThan(0)
})

test("Problems.read returns a Problem", async () => {
  let Problem = await obj.read("rectVFkzwNnY9LuKw")
  expect(Problem.id).toBe("rectVFkzwNnY9LuKw")
})
