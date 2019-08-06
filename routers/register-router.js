const express = require('express');
const db = require('../data/models/users-model');

const { decodeBody } = require('../authentication/auth-middleware');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { user } = req.body;
  console.log('from newUser, body', user);
  try {
    const addNewUser = await db.addUser(user);
    console.log('from addNewUser', addNewUser);
    res.status(201).json({
      message: `user was successfully added to database.`,
      id: addNewUser[0], // returns the id that is on SQL table
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

router.post('/login', async (req, res) => {
  const { user } = req.body;

  try {
    const loggedInUser = await db.getUserIDByFirebaseID(user.firebaseId);
    res.status(200).json(loggedInUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

module.exports = router;
