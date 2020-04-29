const request = require('supertest')
const db = require('../database/dbConfig')
const server = require('../api/server')
const auth = require('../auth/auth-router')


describe("user router", () => {
const tester = {
    id: 1,
    username: 'tester',
    password: 'password',
    city: "DC",
    name: "tester"
};

let token;

beforeEach(async () => {
    await db('users').truncate();
    token = auth.generateToken(tester);
    return db("users")
    .insert(tester)
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


describe("GET /api/users/:id", () => {
    it("should return 200", async () => {
      const res = await request(server)
        .get(`/api/users/${tester.id}`)
        .set("Authorization", token);
      expect(res.status).toBe(201);
    });
})
})



