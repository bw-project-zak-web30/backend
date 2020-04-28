const express = require('express');

const db = require("../database/dbConfig");

const Equipment = require('./equipment-model');


const router = express.Router();


// get list of Equipment


router.get('/', (req, res) => {
  Equipment.get()
  .then(equipment => {
    res.json(equipment);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get equipment' });
  });
});


// Get equipment by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Equipment.getById(id)
    .then(equipment => {
      if (equipment) {
        res.json(equipment);
      } else {
        res.status(404).json({ message: 'Could not find equipment with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Equipment' });
    });
  });

  //user click.
  //reference the item, user, and the owner
  //get from front-end userId, equipmentId


  router.post("/", (req, res) => {
    const rental = req.body
  
  console.log(rental)
  Equipment.rentEquipment(rental)
  .then(rent => {
    if (rent) {
        res.status(201);
      } else {
        res.status(404).json({ message: 'Could not find equipment with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add rental', errorMessage: err });
    });
  })

module.exports = router;