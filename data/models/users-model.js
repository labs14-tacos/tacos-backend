const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById
}

async function add(user) {
  const [id] = await db('Users')
    .insert(user, 'id')
  return findById(id)
}

function find() {
  return db('Users')
}

function findById(id) {
  return db('Users')
    .where({
      id
    })
    .first();
}