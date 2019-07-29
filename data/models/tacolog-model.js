const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  update,
  findUserTacosById,
  remove

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

function update(id, changes) {
  return db('TacoLog')
  .where('id', id)
  .update(changes);
}

// Finds all tacologs by UserID
function findUserTacosById(userId) {
  return db('TacoLog')
    .where({
      userId: userId
    })
}

async function remove(id) {
  return db('Users')
  .where({id})
  .del();
}
