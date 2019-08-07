const express = require('express');
const router = express.Router();


const TacoLogs = require('../data/models/tacolog-model');

// GET REQUESTS

// GET ALL Tacologs
router.get('/', async(req, res) => {
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
  router.get('/:id', async (req, res) => {
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


// GET Tacologs by User Id 
  router.get('/user/:userId', async (req, res) => {
    try {
      const test = await TacoLogs.findUserTacosById(req.params.userId)
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
router.post('/', async (req, res) => {
  const tacolog = req.body;
  const ingredients = JSON.stringify(tacolog.ingredients);
  const ratings = JSON.stringify(tacolog.ratings);
  const tacologFormatted = {
    ...tacolog, 
    "ingredients": ingredients,
    "ratings": ratings
  }
  if(!tacolog.restaurantName || !tacolog.rating) {
    return res.status(404).json({
    message: "Make sure to fillout all of input fields"
  })
} else {
  try {
    const newTacoLog = await TacoLogs.add(tacologFormatted)
    res.status(201).json(newTacoLog)
  } catch (error) {
    res.status(500).json(error)
  }
  }
})

// UPDATE tacolog
router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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

  module.exports = router;  