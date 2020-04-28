const db = require("../database/dbConfig");

function get() {
  return db("equipment");
}
function getById(id) {
  return db("equipment").where({ id }).first();
}

function rentEquipment(rental) {
  return db("rentals").insert(rental)
}



module.exports = {
  get,
  getById,
  rentEquipment,
};