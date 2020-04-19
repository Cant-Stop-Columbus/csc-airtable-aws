import handler from "../lib/handler-lib"
import Measurement from "./Measurement"
import MeasurementDataSource from "./MeasurementDataSource"

let obj = new Measurement(new MeasurementDataSource())

let list = handler(async (event, context) => {
  return await obj.list()
})

let read = handler(async (event, context) => {
  return await obj.read(event.pathParameters.id)
})

export { list, read }
