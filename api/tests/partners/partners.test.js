import Partner from "../../partners/Partner"
import PartnerDataSource from "../../partners/PartnerDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../partners/PartnerDataSource.js")
}

let obj = new Partner(new PartnerDataSource())

test("partner.list lists all current partners", async () => {
  let partners = await obj.list()
  expect(partners.length).toBeGreaterThan(0)
})

test("partner.read returns a partner", async () => {
  let partners = await obj.list()
  let partnerId = partners[0].id
  let partner = await obj.read(partnerId)
  expect(partner.id).toBe(partnerId)
})
