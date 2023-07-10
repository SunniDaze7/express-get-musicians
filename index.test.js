// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const { Band } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");

describe('testing endpoint', () => {
    // Write your tests here
    
  //get restaurants status 200
    //get restaurants is array
    //get restaurants has correct number of restautants
    //put restaurnant id updates array
    test('can read musician', async()=>{
        const response = await request(app).get('/musicians')
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body[0].name).toBe('Mick Jagger')
    })
    //post resturns updated restaurant array
    test('can POST', async()=>{
        const response = await request(app).post('/musicians').send({name: 'Alice', location: 'london', cuisine: 'french'})
        expect(response.body.name).toBe("Alice")
      })
    //delete restaurant id deletes correct restaurnat
    test('can DELETE', async()=>{
        const response = await request(app).delete('/musicians/:id')
        expect(response).toBe(404)
      })
})