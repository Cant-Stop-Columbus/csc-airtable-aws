import Project from "../../projects/Project"
import ProjectDataSource from "../../projects/ProjectDataSource"

if (process.env.MOCK) {
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

test("projects.list expands categories within the projects", async () => {
  let projects = await obj.list()
  expect(projects[0]["Category"][0].id).toBeTruthy()
})

test("projects.list expands impacts within the projects", async () => {
  let projects = await obj.list()
  expect(projects[0]["Primary Impact Area"][0].id).toBeTruthy()
})
