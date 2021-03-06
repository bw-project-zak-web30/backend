const request = require('supertest')
const db = require('../database/dbConfig')
const server = require ('../api/server')


beforeEach(async () => {
    jest.setTimeout(10000);
    await db('users').truncate();
});


describe('POST /api/auth/register', () => {
    it('Responds with 201', async done => {

        // register user to db
        let res = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'alantest111',
                password: 'password',
                city: "DC", 
                name: "alan"
            })
        expect(res.status).toBe(201);
        done();
    })

    it('Responds with 500 if error occurs', async done => {

        // register user to db without all requirements
        let res = await request(server)
        .post('/api/auth/register')
        .send({
            username: 'alan'
    
        })
        expect(res.status).toBe(500)
        done()
    })
    

})

describe('POST /api/auth/login', () => {
    it('Responds with 200', async done => {
        // register user to db
        let res = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'alantesting9999999',
                password: 'password',
                city: "DC", 
                name: "alan"
            })
        expect(res.status).toBe(201);

        // Login with same credentials
        res = await request(server)
            .post('/api/auth/login')
            .send({
                username: 'alantesting9999999',
                password: 'password'
            })
        expect(res.status).toBe(200);
        done();

        
    })
    it('Responds with 401 when invalid credentials', async done => {
        // register user to db
        let res = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'alantesting000',
                password: 'password',
                city: "DC", 
                name: "alan"
            })
        expect(res.status).toBe(201);

        // Login with user that does not exist
        res = await request(server)
            .post('/api/auth/login')
            .send({
                username: 'alantest000',
                password: 'wrongpassword'
            })
        expect(res.status).toBe(401);
        done();
    })
})





