const { describe, it, expect } = require('@jest/globals')
const request = require('supertest')
const app = require('../app')

describe('GET /api/calc/id/x/y', () => {
    it("respond with json", done => {
        request(app)
            .get('/api/calc/1/1/1')
            .expect(200)
            .expect('Content-type', 'aplication/json')
            return done()
    })

    it("the result of 2 + 2 should be 4", done => {
        request(app)
            .get('/api/calc/1/2/2')
            .expect(200)
            .expect('Content-type', 'aplication/json')
            .then( response => {
                expect(+response.body.result).toBe(4)
            })
            done()
    })

    it("the result of 2 - 2 should be 0", done => {
        request(app)
            .get('/api/calc/2/2/2')
            .expect(200)
            .expect('Content-type', 'aplication/json')
            .then( response => {
                expect(+response.body.result).toBe(0)
            })
            done()
    })

    it("the result of 2 * 2 should be 4", done => {
        request(app)
            .get('/api/calc/3/2/2')
            .expect(200)
            .expect('Content-type', 'aplication/json')
            .then( response => {
                expect(+response.body.result).toBe(4)
            })
            done()
    })

    it("the result of 2 / 2 should be 1", done => {
        request(app)
            .get('/api/calc/4/2/2')
            .expect(200)
            .expect('Content-type', 'aplication/json')
            .then( response => {
                expect(+response.body.result).toBe(1)
            })
            done()
    })

    it("response should be status 404", done => {
        request(app)
            .get('/api/calc/5/2/2')
            .expect(404)
            .expect('Content-type', 'aplication/json')
            done()
    })

    it("response message should be 'Route not found'", done => {
        request(app)
            .get('/api/calc/5/2/2')
            .expect(404)
            .expect('Content-type', 'aplication/json')
            .then( response => {
                expect(response.body).toStrictEqual({'message' : 'Route not found'})
            })
            done()
    })

    it("negative id to be invalid", done => {
        request(app)
            .get('/api/calc/-3/2/2')
            .expect(404)
            .expect('Content-type', 'aplication/json')
            done()
    })

    it("negative value (x or y) to be invalid", done => {
        request(app)
            .get('/api/calc/3/-2/2')
            .expect(404)
            .expect('Content-type', 'aplication/json')
            done()
    })
    
    
})
