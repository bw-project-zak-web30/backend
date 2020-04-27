const express = require('express');

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

  // add a new equipment
  router.post("/", (req, res) => {
    Equipment.add(req.body)
      .then((equipment) => {
        res.status(201).json(equipment);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  });

// update equipment
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Equipment.getById(id)
    .then(equipment => {
      if (equipment) {
        Equipment.update(changes, id)
        .then(updatedEquipment => {
          res.json(updatedEquipment);
        });
      } else {
        res.status(404).json({ message: 'Could not find equipment with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update equipment' });
    });
  });


  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Equipment.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find equipment with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete equipment' });
    });
  });





module.exports = router;