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
    

})