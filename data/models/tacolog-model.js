const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById
}

async function add(tacolog) {
  const [id] = await db('TacoLog')
    .insert(tacolog, 'id')
  return findById(id)
}

function find() {
  return db('TacoLog')
}

function findById(id) {
  return db('TacoLog')
    .where({
      id
    })
    .first();
}