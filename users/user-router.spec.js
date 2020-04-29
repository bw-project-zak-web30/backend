const request = require('supertest')
const db = require('../database/dbConfig')
const server = require('../api/server')


beforeEach(async () => {
    await db('users').truncate();
});



describe('GET /api/users', () => {
    it('Responds with 400 if not authenticated', async done => {
        let res = await request(server)
            .get('/api/users')
        expect(res.status).toBe(400);
        done()
    })
    it('Message says <Please provide credentials> if not logged in', async done => {
        res = await request(server)
            .get('/api/users')
        expect(res.body.message).toBe('Please provide credentials');
        done();
    })
})



describe('get /api/user/:id', () => {
const user = {
    
}


    it('register user to db', async done => {
        let res = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'alan',
                password: 'password',
                city: "DC",
                name: "alan"
            })
        expect(res.status).toBe(201);




        res = await request(server).post('/api/auth/login')
            .send({
                username: 'alan',
                password: 'password'
            })
        expect(res.status).toBe(200);
        done();
    })


    it('trys gets id that is not there and throws error', async done => {

        let res = await request(server)
            .post('/api/auth/register')
            .send({
                username: 'alan',
                password: 'password',
                city: "DC",
                name: "alan"
            })
        
        res = await request(server).post('/api/auth/login')
            .send({
                username: 'alan',
                password: 'password'
            })
       
         res = await request(server)
            .get('/api/users/1111')
        expect(res.status).toBe(404)

        done();
    })



})


