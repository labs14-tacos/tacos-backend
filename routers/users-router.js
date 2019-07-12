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

// POST REQUEST

router.post('/', async (req, res) => {
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

module.exports = router;