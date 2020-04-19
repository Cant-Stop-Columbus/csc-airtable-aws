import Problem from "../../Problems/Problem"
import ProblemDataSource from "../../Problems/ProblemDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../problems/ProblemDataSource.js")
}

let obj = new Problem(new ProblemDataSource())

test("Problems.list lists all current Problems", async () => {
  let problems = await obj.list()
  expect(problems.length).toBeGreaterThan(0)
})

test("Problems.read returns a Problem", async () => {
  let problem = await obj.read("rectVFkzwNnY9LuKw")
  expect(problem.id).toBe("rectVFkzwNnY9LuKw")
})
