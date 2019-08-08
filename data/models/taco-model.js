const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  update,
  findMyTacologTacos,
  remove

}

// add a taco -- this must have a tacolog Id on the taco object
async function add(taco) {
  const [id] = await db('Tacos')
    .insert(taco).returning('id') // this guarantees that it will work with postgres
  return findById(id)
}

// return all tacos
function find() {
  return db('Tacos')
}

// find taco by id
function findById(id) {
  return db('Tacos')
    .where({
      id
    })
    .first();
}

// updates taco by id
function update(id, changes) {
  return db('Tacos')
  .where('id', id)
  .update(changes);
}

// Finds all tacos belonging to a tacolog by tacolog Id
function findMyTacologTacos(tacologId) {
  return db('Tacos')
    .where({
      tacologId: tacologId 
    })
}

// deletes taco by Id
async function remove(id) {
  return db('Tacos')
  .where({id})
  .del();
}
