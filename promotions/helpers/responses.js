'use strict'

class Response {
  constructor(success, code, retval) {
    this.success = success
    this.code = code
    this.retval = retval
  }
  
  succeed(data, context, callback) {
    callback(null, {
      statusCode: this.code,
      body: JSON.stringify(data),
    })
  }
  
  error(error, context, callback) {
    console.error(error.message)
    callback(null, {
      statusCode: error.statusCode,
      body: JSON.stringify({
        error: error.message,
        reference: context.awsRequestId,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
  
  respond(context, callback) {
    if (this.success) {
      this.succeed(this.retval, context, callback)
    } else {
      this.error(this.retval, context, callback)
    }
  }  
}

module.exports = Response
