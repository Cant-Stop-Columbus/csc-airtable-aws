import Category from "../../categories/Category"
import AirtableDataSource from "../../categories/categoryDataSource"

jest.mock("../../categories/categoryDataSource.js")

let dataSource = new AirtableDataSource()

let obj = new Category(dataSource)

test("categories.list lists all current categories", async () => {
  let categories = await obj.list()
  expect(categories.length).toBeGreaterThan(0)
})

test("categories.read returns a category", async () => {
  let category = await obj.read("recxjfpf7NPBcQuzp")
  expect(category.id).toBe("recxjfpf7NPBcQuzp")
})
