import AirtableTransformer from "../lib/AirtableTransformer"

export default class PromotionDataTransformer extends AirtableTransformer {
  constructor() {
    super()
  }
  
  listXform(retval) {
    // expects retval to be return from .select().firstPage()
    try {
      return retval.map((elem) => {
        return elem.fields
      })
    } catch (error) {
      console.log(`${error.message} inside PromotionDataTransformer: retval = ${JSON.stringify(retval)}`)
      return null
    }
  }
}