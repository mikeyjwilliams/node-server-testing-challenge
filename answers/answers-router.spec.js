/** @format */

const db = require('../data/config');
const answerModel = require('./answers-model');

beforeEach(async () => {
  await db.seed.run();
});

// describe('get all answers route', () => {
//     test('GET => answers', async () => {
//         const res = await answerModel.
//     })
// })
