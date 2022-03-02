const request = require('supertest')
const app = require('../app')

describe('GET /calc', function() {
    it('should 2 plus 2 to be equal 4', async function() {
      // GIVEN
      const response = await request(app)
        .post('/calc')
        .send({
            values: [2, 2],
            operator: '+'
        })
      // WHEN
      const actual = response.body.result
      // THEN
      expect(actual).toEqual(4);
    })

    it('should 2 minus 2 to be equal 0', async function() {
      // GIVEN
      const response = await request(app)
        .post('/calc')
        .send({
            values: [2, 2],
            operator: '-'
        })
      // WHEN
      const actual = response.body.result
      // THEN
      expect(actual).toEqual(0);
    })

    it('should 2 times 2 be equal 4', async function() {
      // GIVEN
      const response = await request(app)
        .post('/calc')
        .send({
            values: [2, 2],
            operator: '*'
        })
      // WHEN
      const actual = response.body.result
      // THEN
      expect(actual).toEqual(4);
    })

    it('should 2 divided by 2 be equal 1', async function() {
      // GIVEN
      const response = await request(app)
        .post('/calc')
        .send({
            values: [2, 2],
            operator: '/'
        })
      // WHEN
      const actual = response.body.result
      // THEN
      expect(actual).toEqual(1);
    })
  })