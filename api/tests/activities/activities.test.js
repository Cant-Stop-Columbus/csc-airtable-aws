import Activity from "../../activities/Activity"
import ActivityDataSource from "../../activities/ActivityDataSource"

if (process.env.MOCK === "1") {
  jest.mock("../../Activities/ActivityDataSource.js")
}

let obj = new Activity(new ActivityDataSource())

test("activities.list lists all current activities", async () => {
  let activities = await obj.list()
  expect(activities.length).toBeGreaterThan(0)
})

test("activities.read returns an activity", async () => {
  let activities = await obj.list()
  let activityId = activities[0].id
  let activity = await obj.read(activityId)
  expect(activity.id).toBe(activityId)
})
