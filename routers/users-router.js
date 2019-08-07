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


// Find By Id
router.get('/:id', async (req, res) => {
  try {
    const test = await Users.findById(req.params.id)
    if(!test){
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


// // POST REQUEST

// POST New User (register)
router.post('/', async (req, res) => {
    const user = req.body;
    if(!user.email) {
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
    const{firstName, lastName, email, firebaseId} = req.body
  
    // const test = await Users.find(id, req.body)
    const findId = await Users.findById(id)

   if (!email || !firebaseId){
      res.status(400).json({
        message: "All fields not completed"
      })
    } else if(!findId) {
       res.status(404).json({
         message: "ID could not be found"
       })
    } else {
      const test2 = await Users.update(id, req.body)
      res.status(200).json(test2)
    }
  } catch (error) {
    res.status(500).json({
      message: "There was a server error"
    })
  }
})

// // DELETE User

router.delete('/:id', async (req, res) => {
   try {
     const id = req.params.id 
     const test = await Users.findById(id)
     if(!test) {
       res.status(404).json({
         message: "There is no ID by that number"
       })
     } else {
       const test2 = await Users.removeUser(id)
       res.status(200).json(test2)
     }
   } catch (error) {
     res.status(500).json({
       message: "There was a server error"
     })
   }
})

module.exports = router;   