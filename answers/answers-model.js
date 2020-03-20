/** @format */

const db = require('../data/config');

module.exports = {
  findBy,
  findById,
  add,
  changeAns,
  getAll,
  remove,
};

function findBy(filter) {
  return db('answers')
    .where(filter)
    .select();
}

function findById(id) {
  return db('answers')
    .where({ id })
    .first();
}

async function add(answer) {
  const [id] = await db('answers').insert(answer);

  return findById(id);
}

async function changeAns(id, changes) {
  await db('answers')
    .where({ id })
    .update(changes);

  return findById(id);
}

function getAll() {
  return db('answers').select();
}

function remove(id) {
  return db('answers')
    .where({ id })
    .del();
}
