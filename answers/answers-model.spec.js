/** @format */

const db = require('../data/config');
const answerModel = require('./answers-model');

beforeEach(async () => {
  await db.seed.run();
});

describe('answers findById', () => {
  test('findById', async () => {
    const res = await answerModel.findById(3);
    expect(res.title).toMatch(/jest/i);
  });
});
