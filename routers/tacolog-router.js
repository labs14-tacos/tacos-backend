const express = require('express');
const router = express.Router();


const TacoLogs = require('../data/models/tacolog-model');

// GET REQUESTS

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