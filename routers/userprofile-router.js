const express = require('express');
const router = express.Router();
const Users = require('../data/models/users-model');
const TacoLogs = require('../data/models/tacolog-model');
const {decodeHeader} = require('../authentication/auth-middleware')


// Find By Firebase Id
router.get('/my_info', decodeHeader, async (req, res) => {
    Users.findById(req.headers.user.firebaseId).then(user => 
      res.status(200).json(user)
      ).catch(error =>  res.status(500).json({
        message: "There was a server error"
      }) )
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

  module.exports = router;