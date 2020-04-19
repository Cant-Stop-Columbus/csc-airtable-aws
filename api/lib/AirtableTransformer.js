export default class AirtableTransformer {
  constructor() {
    this.name = "AirtableTransformer"
  }
  
  listXform(retval) {
    // expects retval to be return from .select().firstPage()
    try {
      return retval.map((elem) => {
        var data = elem.fields
        data.id = elem.id
        return data
      })
    } catch (error) {
      return null
    }
  }

  createXform(retval) {
    retval[0].fields.id = retval[0].id
    return retval[0].fields
  }

  readXform(retval) {
    retval.fields.id = retval.id
    return retval.fields
  }

  updateXform(retval) {
    retval.fields.id = retval.id
    return retval.fields
  }

}