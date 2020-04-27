const db = require("../database/dbConfig");

function get() {
  return db("users");
}
function getById(id) {
  return db("users").where({ id }).first();
}


function add(user) {
  return db("users").insert(user)
}

function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => getById(id));
}

function remove(id) {
  return db("users").where("id", id).del();
}

function getEquipment(owner_id) {
  return db("equipment as e")
    .join("users as u", "e.id", "u.id")
    .select("e.name", "e.price")
    .where({ owner_id});
}

module.exports = {
  get,
  getById,
  add,
  update,
  remove,
  getEquipment
};