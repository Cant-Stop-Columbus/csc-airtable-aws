import Project from "../../projects/Project"
import ProjectDataSource from "../../projects/ProjectDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../projects/ProjectDataSource.js")
}

let obj = new Project(new ProjectDataSource())

test("projects.list lists all current projects", async () => {
  let projects = await obj.list()
  expect(projects.length).toBeGreaterThan(0)
})

test("projects.read returns a project", async () => {
  let projects = await obj.list()
  let projectId = projects[0].id

  let project = await obj.read(projectId)
  expect(project.id).toBe(projectId)
})
