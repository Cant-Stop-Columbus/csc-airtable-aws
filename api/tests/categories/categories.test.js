import Category from "../../categories/Category"
import CategoryDataSource from "../../categories/CategoryDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../categories/CategoryDataSource.js")
}

let obj = new Category(new CategoryDataSource())

test("categories.list lists all current categories", async () => {
  let categories = await obj.list()
  expect(categories.length).toBeGreaterThan(0)
})

test("categories.read returns a category", async () => {
  let categories = await obj.list()
  let categoryId = categories[0].id
  let category = await obj.read(categoryId)
  expect(category.id).toBe(categoryId)
})
