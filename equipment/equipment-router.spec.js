const request = require('supertest')
const db = require('../database/dbConfig')
const server = require('../api/server')
const auth = require('../auth/auth-router')


describe("user router", () => {
const tester = {
    id: 2,
    username: 'tester2',
    password: 'password',
    city: "DC",
    name: "tester"
};

let equipmenttest =   {
    id: 21,
    name: "Alans Test Machine",
    price: 30,
    timeframe: 7,
    details: "you can use my tests for 7 days",
    renting: 1,
    owner_id: 2
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

// CAN GET ALL EQUIPMENT IF LOGGED IN
describe('GET /api/equipment', () => {
    it('Responds with 200', async done => {
        let res = await request(server)
            .get('/api/equipment')
            .set("Authorization", token);
        expect(res.status).toBe(200);
        done()
    })
    it('Message says <Please provide credentials> if not logged in', async done => {
        res = await request(server)
            .get('/api/equipment')
        expect(res.body.message).toBe('Please provide credentials');
        done();
    })
})

//CAN GET EQUIPMENT BY ID
describe("GET /api/equipment/:id", () => {
    it("should return 200", async () => {
      const res = await request(server)
        .get(`/api/equipment/${equipmenttest.id}`)
        .set("Authorization", token);
      expect(res.status).toBe(200);
    });
})


// describe("POST /api/equipment", () => {
//     it("should return 200", async () => {
//       const res = await request(server)
//         .post(`/api/equipment`)
//         .set("Authorization", token)
//         .send({
//             owner_id: 1, 
//             renter_id: 2,
//              equipment_id: 22, 
//              return_date:  '2020-10-10', 
//              start_date: '2020-10-8', 
//              details:"Rental is only for two days."
//         })
//       expect(res.status).toBe(200);
 
//     });
// })

})



