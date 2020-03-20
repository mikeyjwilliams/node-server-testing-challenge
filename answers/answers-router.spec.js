/** @format */

const supertest = require('supertest');
const db = require('../data/config');
const answerModel = require('./answers-model');
const server = require('../server');

beforeEach(async () => {
  await db.seed.run();
});

describe('create resource', () => {
  it('POST /answers fail -> title required', async () => {
    const res = await supertest(server)
      .post('/answers')
      .send({ title: null });

    expect(res.statusCode).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('title is required');
  });

  it('POST /answers fail => solution required', async () => {
    const res = await supertest(server)
      .post('/answers')
      .send({ title: 'jest solution', solution: null });

    expect(res.statusCode).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toBe('solution is required');
  });

  it('POST /answer pass all data', async () => {
    const answer = {
      title: 'node.js solution',
      solution: 'check the docs',
      comment: 'the docs are full of helpful advice',
    };
    const res = await supertest(server)
      .post('/answers')
      .send(answer);
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body.title).toMatch(/node.js solution/i);
  });
});

describe('delete resource', () => {
  it('delete /answers/:id fails', async () => {
    const res = await supertest(server).delete('/answers/6');

    expect(res.statusCode).toBe(400);
    expect(res.type).toBe('application/json');
    expect(res.body.message).toMatch(/answer id not found/i);
  });

  it('delete /answers/4 passes', async () => {
    const res = await supertest(server).delete('/answers/3');
    expect(res.statusCode).toBe(204);
  });
});
