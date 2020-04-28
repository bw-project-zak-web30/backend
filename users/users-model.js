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

function getEquipmentById(id){
  return db("equipment").where("owner_id", id)
}

function getOwnedRentalsById(id){
  return db("rentals").where("owner_id", id)
}

function getRentingById(id){
  return db("rentals").where("renter_id", id)
}

function updateEquipment(owner_id, item_id, changes) {
  return db("equipment")
    .where({owner_id})
    .andWhere({item_id})
    .update(changes)
    .then(() => {
      return db("equipment")
        .where({owner_id, item_id})
    })
}


module.exports = {
  get,
  getById,
  add,
  update,
  remove,
  getEquipmentById,
  getOwnedRentalsById,
  getRentingById,
  updateEquipment,
};