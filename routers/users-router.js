const express = require('express');
const router = express.Router();
const Users = require('../data/models/users-model');

// GET REQUESTS

router.get('/', async(req, res) => {
  try {
    const users = await Users.find();
    res
      .status(200)
      .json(users);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving these users.'
      });
  }
});

// FindByID  CAN REMOVE THIS
// router.get('/:id', async(req, res) => {
//   try {
//     const users = await Users.findById(req.params.id);
//     res
//       .status(200)
//       .json(users);
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         message: 'There was an error retrieving these users.'
//       });
//   }
// });

// Find By Id
router.get('/:id', async (req, res) => {
  try {
    const test = await Users.findById(req.params.id)
    if(test.length == 0){
      res.status(404).json({
        message: "The ID could not be found"
      })
    } else {
      res.status(200).json(test)
    }
  } catch (error) {
    res.status(500).json({
      message: "There was a server error"
    })
  }
})


// POST REQUEST

// POST New User
router.post('/', async (req, res) => {
    const user = req.body;
    if(!user.firstName || !user.lastName || !user.email) {
      return res.status(404).json({
      message: "Make sure to fillout all of input fields"
    })
  } else {
    try {
      const newUser = req.body;
      const brandNewUser = await Users.add(newUser)
      res.status(201).json(brandNewUser)
    } catch (error) {
      res.status(500).json(error)
    }
  }
})


// UPDATE User
router.put('/:id', async (req, res) => {
  try {

    const id = req.params.id 
    const test = await Users.update(id, req.body)

   if (!id){
      res.status(404).json({
        message: "The ID could not be found"
      })
    } else {
      res.status(200).json(test)
    }
  } catch (error) {
    res.status(500).json({
      message: "There was a server error"
    })
  }
})

// DELETE User
router.delete('/:id', async (req, res) => {
  try {
    
    const test = await Users.removeUser(req.params.id)

   if (test > 0){
     res.status(204).end();
   } else {
     res.status(404).json({
       message: "User deleted"
     })
   }

  } catch (error) {
    res.status(500).json({
      message: "There was a server error"
    })
  }
})

module.exports = router;