const express = require('express');
const router = express.Router();
const {decodeHeader} = require('../authentication/auth-middleware')


const TacoLogs = require('../data/models/tacolog-model');

// GET REQUESTS

// GET ALL Tacologs
router.get('/', decodeHeader, async (req, res) => {
    try {
      const tacologs = await TacoLogs.find();
      res
        .status(200)
        .json(tacologs);
    } catch (error) {
      res
        .status(500)
        .json({
          message: 'There was an error retrieving these taco logs.'
        });
    }
  });


// GET Tacologs by ID
  router.get('/:id', decodeHeader, async (req, res) => {
    try {
      const test = await TacoLogs.findById(req.params.id)
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

// GET Tacologs by User who is Logged In 

router.get('/mytacolog', decodeHeader, async (req, res) => {
  const firebaseId = req.headers.user.firebaseId
  try {
    const test = await TacoLogs.findUserTacosById(firebaseId)
    if(!test){
      res.status(404).json({
        message: "No taco logs belonging to this user could not be found"
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

// GET Tacologs by User's Firebase Id 
  router.get('/user/:firebaseId', decodeHeader, async (req, res) => {
    try {
      const test = await TacoLogs.findUserTacosById(req.params.firebaseId)
      if(!test){
        res.status(404).json({
          message: "No taco logs belonging to this user could not be found"
        })
      } else {
        res.status(200).json({ })
      }
    } catch (error) {
      res.status(500).json({
        message: "There was a server error"
      })
    }
  })


// // POST REQUEST

// POST a new TacoLog
router.post('/', decodeHeader, async (req, res) => {
  const tacolog = req.body;
  const ingredients = JSON.stringify(tacolog.ingredients);
  const tacologFormatted = {
    ...tacolog, 
    "ingredients": ingredients, 
    "firebaseId": req.headers.user.firebaseId
  }
  try {
    const newTacoLog = await TacoLogs.add(tacologFormatted)
    res.status(201).json(newTacoLog)
  } catch (error) {
    res.status(500).json(error)
  }
})

// UPDATE tacolog
router.put('/:id', decodeHeader, async (req, res) => {
  try {

    const id = req.params.id 
    const{restaurantName, rating} = req.body
  
    // const test = await Users.find(id, req.body)
    const findId = await TacoLogs.findById(id)

   if (!restaurantName || !rating){
      res.status(400).json({
        message: "All fields not completed"
      })
    } else if(!findId) {
       res.status(404).json({
         message: "ID could not be found"
       })
    } else {
      const test2 = await TacoLogs.update(id, req.body)
      res.status(200).json(test2)
    }
  } catch (error) {
    res.status(500).json({
      message: `There was a server error: ${error}`
    })
  }
})

// // DELETE tacolog

router.delete('/:id', decodeHeader, async (req, res) => {
  try {
    const id = req.params.id 
    const test = await TacoLogs.findById(id)
    if(!test) {
      res.status(404).json({
        message: "There is no ID by that number"
      })
    } else {
      const test2 = await TacoLogs.remove(id)
      res.status(200).json(test2)
    }
  } catch (error) {
    res.status(500).json({
      message: "There was a server error"
    })
  }
})


// We also need the following routes:

// one that gets all tacologs and associated tacos belonging to a user by their firebaseId (will need a join)
// one that gets all tacos belonging to a tacolog and that tacolog (will need a join)
// one that gets the tacolog info and the user photo and name and user's integer id associated with a tacolog. (need a join)

  module.exports = router;  