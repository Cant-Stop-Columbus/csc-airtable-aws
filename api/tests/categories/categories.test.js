import Category from "../../categories/Category"
import CategoryDataSource from "../../categories/CategoryDataSource"

// jest.mock("../../categories/CategoryDataSource.js")

let obj = new Category(new CategoryDataSource())

test("categories.list lists all current categories", async () => {
  let categories = await obj.list()
  expect(categories.length).toBeGreaterThan(0)
})

test("categories.read returns a category", async () => {
  let category = await obj.read("recTmfe06GL1UuMCJ")
  expect(category.id).toBe("recTmfe06GL1UuMCJ")
})
