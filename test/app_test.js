const assert = require('assert')
const request = require('supertest')
const app = require('../app')

describe('Get test', () => {
    it('get', (done) => {
        request(app).get('/').end((err, resp) => {
            assert(resp.body.hi === 'there')
            done()
        })
    })
})