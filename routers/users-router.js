const express = require('express');
const router = express.Router();
const Users = require('../data/models/users-model');
const {decodeHeader, decodeBody} = require('../authentication/auth-middleware')

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
router.post('/', decodeBody, async (req, res) => {
    const firebaseId = req.body.user.firebaseId;
    const email = req.body.user.email;
    const {firstName, lastName, userPhoto, website, favTaco, instaHandle, twitterHandle, facebookPage} = req.body;
    const singleUser = await Users.getUserByFirebaseID(firebaseId);
    if (singleUser.length > 0) {
      console.log("singleUser", singleUser);
      return res.send(singleUser)
    }
    else {
    const newUser = {
      "firstName": firstName,
      "lastName": lastName,
      "userPhoto": userPhoto,
      "firebaseId": firebaseId,
      "email": email, 
      "favTaco": favTaco,
      "instaHandle": instaHandle,
      "twitterHandle": twitterHandle,
      "facebookPage": facebookPage, 
      "website": website}
    try {
      const brandNewUser = await Users.add(newUser)
      res.status(201).json(brandNewUser)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({error, message: error.message})
    }
     
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