import Project from "../../projects/Project"
import ProjectDataSource from "../../projects/ProjectDataSource"

jest.mock("../../projects/ProjectDataSource.js")

let obj = new Project(new ProjectDataSource())

test("projects.list lists all current projects", async () => {
  let projects = await obj.list()
  expect(projects.length).toBeGreaterThan(0)
})

test("projects.read returns a project", async () => {
  let project = await obj.read("recJOmjpwWgofI4d0")
  expect(project.id).toBe("recJOmjpwWgofI4d0")
})
