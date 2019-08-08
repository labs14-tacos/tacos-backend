const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  update,
  findMyTacos,
  findUserTacosById,
  remove

}

// add a tacolog 
async function add(tacolog) {
  const [id] = await db('TacoLog')
    .insert(tacolog).returning('id') // this guarantees that it will work with postgres
  return findById(id)
}

// return all tacologs
function find() {
  return db('TacoLog')
}

// find tacolog by id
function findById(id) {
  return db('TacoLog')
    .where({
      id
    })
    .first();
}

// updates tacolog by id
function update(id, changes) {
  return db('TacoLog')
  .where('id', id)
  .update(changes);
}

// Finds all tacologs by User Id 
function findUserTacosById(firebaseId) {
  return db('TacoLog')
    .where({
      firebaseId: firebaseId
    })
}

// Finds all tacologs belonging to signed in user 
function findMyTacos(firebaseId) {
  return db('Tacolog')
    .where({
      firebaseId:firebaseId 
    })
}

// deletes tacolog by id
async function remove(id) {
  return db('Tacolog')
  .where({id})
  .del();
}
