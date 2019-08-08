const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  findByIntId,
  update,
  remove, 
}

async function add(restaurant) {
  const [id] = await db('Restaurants')
    .insert(restaurant).returning('id') // this guarantees that it will work with postgres
  return findById(id)
}

function find() {
  return db('Restaurants')
}

function findById(id) {
  return db('Restaurants')
    .where({
      id
    })
    .first();
}


function update(id, changes) {
  return db('Restaurants')
  .where('id', id)
  .update(changes);
}

async function remove(id) {
  return db('Restaurants')
  .where({id})
  .del();
}

