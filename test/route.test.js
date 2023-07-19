const request = require('supertest')
let server

describe('ROUTE TEST', () => {
    beforeEach(() => {
        server = require('../server')
    })

    afterEach(() => {
        server.close()
    })

    describe('GET TRY', () => {

        it('Should return 200 status', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        it('Sould return 501 status', async () => {
            const response = await request(server).get('/fvbhsdgfkdsghjd')
            expect(response.status).toBe(501)
        })
    })
})