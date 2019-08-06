const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  update,
  removeUser, 
  getUserIDByFirebaseID
}

async function add(user) {
  const [id] = await db('Users')
    .insert(user).returning('id') // this guarantees that it will work with postgres
  return findById(id)
}

function find() {
  return db('Users')
}

function findById(id) {
  return db('Users')
    .where({
      'id': id
    })
    .first();
}

function update(id, changes) {
  return db('Users')
  .where('id', id)
  .update(changes);
}

async function removeUser(id) {
  return db('Users')
  .where({id})
  .del();
}

function getUserIDByFirebaseID(firebaseId) {
  return (
    db('users')
      .where({ firebaseId: firebaseId })
      // .select('id');
      .first()
  );
}