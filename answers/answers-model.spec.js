/** @format */
const db = require('../data/config');
const answerModel = require('./answers-model');

beforeAll(async () => {
  await db.seed.run();
});

describe('model findById', () => {
  test('findById', async () => {
    const res = await answerModel.findById(3);
    expect(res.solution).toMatch(/check docs/i);
  });
});

describe('gets all answers', () => {
  test('getAll method for answers', async () => {
    const res = await answerModel.getAll();
    expect(res).toHaveLength(3);
  });
});

describe('answers add resource', () => {
  test('insert', async () => {
    const payload = {
      title: 'es6 map question',
      solution: 'check mozilla docs',
      comment: 'mozilla is best first place to look',
    };
    const res = await answerModel.add(payload);
    expect(res.title).toMatch(/es6 map question/i);
  });
});

describe('answers findBy solution', () => {
  test('findBy', async () => {
    const res = await answerModel.findBy({ solution: 'check version' });
    expect(res[0].title).toMatch(/node issue/i);
  });
});

describe('answers update id 1 data', () => {
  test('update by id', async () => {
    const update = {
      title: 'another database answer',
      solution: 'read the docs for your specific dbms carefully.',
      comment: 'its the best way to learn',
    };
    const res = await answerModel.changeAns(1, update);
    expect(res.title).toMatch(/another database answer/i);
  });
});

describe('remove a resource', () => {
  test('remove', async () => {
    await answerModel.remove(4);
    const res = await answerModel.getAll();
    expect(res).toHaveLength(3);
  });
});
