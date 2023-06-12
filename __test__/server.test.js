const app =require('../src/server.js');
const supertest = require('supertest');
const mockServer = supertest(app.app);
const { db } = require("../src/models/index.js");

beforeAll(async () => { 
    await db.sync(); 
});
describe('Testing server', () => {
    it( 'handles not found request', async () => {
        const response = await mockServer.get('/asd');
        expect(response.status).toEqual(404);
    });
    it('getting all foods', async () => {
        const response = await mockServer.get('/food');
        expect(response.status).toEqual(200);
    });
    it('fetting one food item', async () => {
        const response = await mockServer.get('/food/1');
        expect(response.status).toEqual(200);
    });
    it('posting a food item', async () => {
        const response = await mockServer.post('/food').send({foodName: 'test food',foodType:'test type'});
        expect(response.status).toEqual(201);
    });
    it('updating a food item', async () => {
        const response = await mockServer.put('/food/1').send({foodName: 'test food',foodType:'test type'});
        expect(response.status).toEqual(201);
    });
    it('deleting a food item', async () => {
        const response = await mockServer.delete('/food/1');
        expect(response.status).toEqual(204);
    });
});







afterAll(async () => {
    await db.drop();
});