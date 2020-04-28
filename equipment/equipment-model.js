const db = require("../database/dbConfig");

function get() {
  return db("equipment");
}
function getById(id) {
  return db("equipment").where({ id }).first();
}

function rentEquipment(rental) {
      return db("equipment")
        .where('id', rental.equipment_id)
        .update({
          renting: true
        })
        .then(() => {
          return db("rentals").insert(rental)
        })
  
}



module.exports = {
  get,
  getById,
  rentEquipment,
};