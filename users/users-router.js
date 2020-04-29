const express = require('express');

const Users = require('./users-model');


const router = express.Router();


// get list of users
router.get('/', (req, res) => {
  Users.get()
  .then(Users => {
    res.status(201).json(Users);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Users' });
  });
});


// Get user by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.getById(id)
    .then(user => {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Users', error:err.message });
    });
  });

  // add a new user
  router.post("/", (req, res) => {
    Users.add(req.body)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  });

// update user
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Users.getById(id)
    .then(user => {
      if (user) {
        Users.update(changes, id)
        .then(updatedUser => {
          res.json(updatedUser);
        });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update user' });
    });
  });


  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });

  //get equipment for active user.
  router.get("/:id/equipment", (req, res) => {
    const { id } = req.params

    Users.getEquipmentById(id)
      .then(equip => {
        if (equip) {
          res.status(201).json(equip);
        } else {
          res.status(404).json({ message: 'Could not find equipment with given user id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get equipment' });
      });
  });

  router.put("/:id/equipment/:itemId", (req, res) => {
    const { id } = req.params.id
    const { itemId } = req.params
    const changes = req.body

    Users.updateEquipment(itemId, changes)
      .then(equip => {
        if (equip) {
          res.status(201).json(equip)
        } else {
          res.status(404).json({ message: 'Could not find equipment', })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to update equipment', errorMessage: err });
      });
  })

  router.delete("/:id/equipment/:itemId", (req, res) => {
    const { itemId } = req.params

    Users.removeEquipment(itemId)
      .then(deleted => {
        if (deleted) {
          res.status(200).json({ removed: deleted });
        } else {
          res.status(404).json({ message: 'Could not find equipment with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete equipment', errorMessage: err});
      });
  })

  router.get("/:id/rentals", (req, res) => {
    const { id } = req.params

    Users.getOwnedRentalsById(id)
      .then(equip => {
        if (equip) {
          res.status(201).json(equip);
        } else {
          res.status(404).json({ message: 'Could not find any rentals with given user id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get rentals', errorMessage: err });
      });
  });

  router.get("/:id/renting", (req, res) => {
    const { id } = req.params

    Users.getRentingById(id)
      .then(equip => {
        if (equip) {
          res.status(201).json(equip);
        } else {
          res.status(404).json({ message: 'Could not find any rentals with given user id.' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get rentals' });
      });
  });



module.exports = router;