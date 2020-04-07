let Response = require('../helpers/responses')

const json = '{"code":200, "message":"hello there"}';
const obj = JSON.parse(json);

let rsp = new Response(true, 200, obj)

console.log(obj.message)

rsp.respond(null, (ignore, body) => {
  console.log(JSON.stringify(body))
})