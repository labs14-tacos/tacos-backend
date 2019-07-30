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
          message: 'There was an error retrieving these users.'
        });
    }
  });


// GET Tacologs by ID
  router.get('/:id', async(req, res) => {
    try {
      const tacologs = await TacoLogs.findById(req.params.id);
      res
        .status(200)
        .json(tacologs);
    } catch (error) {
      res
        .status(500)
        .json({
          message: 'There was an error retrieving these users.'
        });
    }
  });

  // Get All Tacologs by User ID
  router.get('/:userId/tacolog', async(req, res) => {
    try {
       const test = await TacoLogs.findUserTacosById(req.params.userId)
       res 
        .status(200)
        .json(test)
    } catch (error) {
      res
       .status(500)
       .json({
          message: 'There was an error retrieving these users.'
       })
    }
  }) 


// POST a new TacoLog
  router.post('/', async (req, res) => {
    try {
       const tacolog = await TacoLogs.add(req.body)
       res.status(201).json(tacolog)
    } catch (error) {
      res 
      .status(500)
      .json({
        message: 'There was an error retrieving these users.'
      })
    }
  })


  module.exports = router;