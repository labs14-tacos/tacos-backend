const express = require('express');
const router = express.Router();
const Users = require('../data/models/users-model');
const {decodeHeader} = require('../authentication/auth-middleware')


// Find By Firebase Id
router.get('/my_info', decodeHeader, async (req, res) => {
    Users.findById(req.headers.user.firebaseId).then(user => 
      res.status(200).json(user)
      ).catch(error =>  res.status(500).json({
        message: "There was a server error"
      }) )
  })
  

  module.exports = router;