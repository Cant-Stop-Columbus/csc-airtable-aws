let Promotion = require('../../promotions/Promotion')

let promo = new Promotion()

promo.create(
  'marks happy business',
  'this is promotional text',
  'https://www.cantstopcolumbus.com'
).then((retval) => {
  console.log(`${retval.code} ${retval.message}`)
})
