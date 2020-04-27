const db = require("../database/dbConfig");

function get() {
  return db("equipment");
}
function getById(id) {
  return db("equipment").where({ id }).first();
}


function add(user) {
  return db("equipment").insert(user)
}

function update(changes, id) {
  return db("equipment")
    .where({ id })
    .update(changes)
    .then(() => getById(id));
}

function remove(id) {
  return db("equipment").where("id", id).del();
}



module.exports = {
  get,
  getById,
  add,
  update,
  remove
};