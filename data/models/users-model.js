const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  findByIntId,
  update,
  removeUser, 
  getUserByFirebaseID
}

// the firebaseId is used in lieu of the integer id in order to make Firebase Auth play nice with our SQL database.

async function add(user) {
  const [id] = await db('Users')
    .insert(user).returning('id') // this guarantees that it will work with postgres
  return findByIntId(id);
}

function find() {
  return db('Users')
}

function findById(firebaseId) {
  return db('Users')
    .where({
      'firebaseId': firebaseId
    })
    .first();
}

function findByIntId(id) {
  return db('Users')
    .where({ 'id': id})
    .first();
}

function update(firebaseId, changes) {
  return db('Users')
  .where('firebaseId', firebaseId)
  .update(changes);
}

async function removeUser(firebaseId) {
  return db('Users')
  .where({firebaseId})
  .del();
}

function getUserByFirebaseID(firebaseId) {
  return (
    db('users')
      .where('firebaseId', '=', firebaseId)
      .select('id')
  );
}