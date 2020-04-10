import { Promotion } from '../../promotions/Promotion'

let promo = new Promotion()

test('creates a promotion', () => {
  promo
    .create(
      'marks happy business',
      'this is promotional text',
      'https://www.cantstopcolumbus.com'
    )
    .then((retval) => {
      expect(retval.statusCode).toEqual(200)
      console.log(`${JSON.stringify(retval)}`)
    })
})
