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


let equipmenttest =   {
    id: 20,
    name: "Alans Test Machine",
    price: 30,
    timeframe: 7,
    details: "you can use my tests for 7 days",
    renting: 1,
    owner_id: 1
}

let token;

beforeEach(async () => {
    jest.setTimeout(10000);
    token = auth.generateToken(tester);
    await db('users')
    .truncate()
    .then(() => db("equipment").truncate())
    return db("users")
    .insert(tester)
    .then(() => db("equipment").insert(equipmenttest))
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

// CAN GET USER BY ID
describe("GET /api/users/:id", () => {
    it("should return 200", async () => {
      const res = await request(server)
        .get(`/api/users/${tester.id}`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})

// CAN UPDATE A SPECIFIC USER
describe("PUT /api/users/:id", () => {
    it("should return 200 when getting updating user by id", async () => {
      const res = await request(server)
        .put(`/api/users/${tester.id}`)
        .set("Authorization", token)
        .send({
            name:"updated"
        })
      expect(res.status).toBe(200);
    });
})

// CAN ADD A USER
describe("POST /api/users", () => {
    it("should return 200 when adding another user", async () => {
      const res = await request(server)
        .post(`/api/users`)
        .set("Authorization", token)
        .send({
            username: 'posttest',
            password: 'password',
            city: "DC", 
            name: "alan"
        })
      expect(res.status).toBe(200);
    });
})

// CAN DELETE USER
describe("DELETE /api/users/:id", () => {
    it("should return 200 when deleting a user by id", async () => {
      const res = await request(server)
        .delete(`/api/users/${tester.id}`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})

// CAN GET A USERS EQUIPMENT
describe("GET /api/users/:id/equipment", () => {
    it("should return 200 when getting users equipment by id", async () => {
      const res = await request(server)
        .get(`/api/users/${tester.id}/equipment`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})

//CAN UPDATE A USERS EQUIPMENT BY ID
describe("PUT/api/users/:id/equipment/:itemId", () => {
    it("should return 200 when getting updating a users equipment by id", async () => {
      const res = await request(server)
        .put(`/api/users/${tester.id}/equipment/20`)
        .set("Authorization", token)
        .send({name: "Bob's printer"})
      expect(res.status).toBe(200);
    });
})

//CAN DELETE A USERS EQUIPMENT
describe("DELETE /api/users/:id/equipment/:itemId", () => {
    it("should return 200 when getting deleting a users equipment by id", async () => {
      const res = await request(server)
        .delete(`/api/users/${tester.id}/equipment/20`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})

// CAN GET A USERS RENTALS
describe("GET /api/users/:id/rentals", () => {
    it("should return 200 when getting users rentals by id", async () => {
      const res = await request(server)
        .get(`/api/users/${tester.id}/rentals`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})

//CAN GET WHAT A USER IS RENTING
describe("GET /api/users/:id/renting", () => {
    it("should return 200 when getting what users are renting by id", async () => {
      const res = await request(server)
        .get(`/api/users/${tester.id}/renting`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})




})



