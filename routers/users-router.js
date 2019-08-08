const express = require('express');
const router = express.Router();
const Users = require('../data/models/users-model');
const {decodeHeader} = require('../authentication/auth-middleware')

// GET REQUESTS

router.get('/', decodeHeader, async(req, res) => {
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


// Find By Integer Id
router.get('/:id', decodeHeader, async (req, res) => {
  try {
    const test = await Users.findByIntId(req.params.id)
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
// this pulls the firebase ID and the email off the token and inserts it into the user table along with everything else
router.post('/', decodeHeader, async (req, res) => {
    const firebaseId = req.headers.user.firebaseId;
    const email = req.headers.user.email;
    const {firstName, lastName, userPhoto, zipcode, tacosPerMonth, hardOrSoft, cornOrFlour, heatPreference, streetOrGourmet, favTaco, favTacoLocation, bestTacoMemory, instaHandle, twitterHandle, facebookPage} = req.body;
    const newUser = {
      "firstName": firstName,
      "lastName": lastName,
      "userPhoto": userPhoto,
      "firebaseId": firebaseId,
      "email": email, 
      "zipcode": zipcode, 
      "tacosPerMonth": tacosPerMonth,
      "hardOrSoft": hardOrSoft,
      "cornOrFlour": cornOrFlour,
      "heatPreference": heatPreference,
      "streetOrGourmet": streetOrGourmet,
      "favTaco": favTaco,
      "favTacoLocation": favTacoLocation,
      "bestTacoMemory": bestTacoMemory,
      "instaHandle": instaHandle,
      "twitterHandle": twitterHandle,
      "facebookPage": facebookPage}
    try {
      const brandNewUser = await Users.add(newUser)
      res.status(201).json(brandNewUser)
    } catch (error) {
      res.status(500).json(error)
    }
  })



// UPDATE User
router.put('/', decodeHeader, async (req, res) => {
  try {

    const firebaseId = req.headers.user.firebaseId;

    const{firstName, lastName, email} = req.body
  
    // const test = await Users.find(id, req.body)
    const findId = await Users.findById(firebaseId)

   if (!email || !firebaseId){
      res.status(400).json({
        message: "All fields not completed"
      })
    } else if(!findId) {
       res.status(404).json({
         message: "ID could not be found"
       })
    } else {
      const test2 = await Users.update(firebaseId, req.body)
      res.status(200).json(test2)
    }
  } catch (error) {
    res.status(500).json({
      message: "There was a server error"
    })
  }
})

// // DELETE User

router.delete('/', decodeHeader, async (req, res) => {
   try {
    const firebaseId = req.headers.user.firebaseId;

     const test = await Users.findById(firebaseId)
     if(!test) {
       res.status(404).json({
         message: "There is no ID by that number"
       })
     } else {
       const test2 = await Users.removeUser(firebaseId)
       res.status(200).json(test2)
     }
   } catch (error) {
     res.status(500).json({
       message: "There was a server error"
     })
   }
})

module.exports = router;   