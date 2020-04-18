export default class AirtableTransformer {
  listXform(retval) {
    // expects retval to be return from .select().firstPage()
    return retval.records.map((elem) => {
      return elem.fields
    })
  }

  createXform(retval) {
    return retval[0].fields
  }

  readXform(retval) {
    retval.fields.id = retval.id
    return retval.fields
  }

  updateXform(retval) {
    return retval
  }
}