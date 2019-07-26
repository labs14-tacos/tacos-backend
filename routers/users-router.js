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

// FindByID
router.get('/:id', async(req, res) => {
  try {
    const users = await Users.findById(req.params.id);
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

// POST REQUEST

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const user = await Users.add(req.body);
    
    res
      .status(201)
      .json(user);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error adding this user.'
      });
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const user = await db('Users')
//     .where({ user_id: req.params.id})
//     .update(req.body)
//     .then(count => {
//       if(count > 0){
//         res.status(202).json(user) 
//        } else {
//         res.status(404).json(error)
//     }
//    })
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         message: 'There was an error adding this user.'
//       });
//   }
// })

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


module.exports = router;