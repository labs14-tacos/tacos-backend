const express = require('express');
const db = require('../data/models/users-model');
const router = express.Router();


router.post('/', async (req, res) => {
    const user = req.body.user; // pulls user object out of firebase token after decodeBody middleware 
    try {
      // if firebaseId is NOT in the table, add it to the table and send back user object. 
    // if firebaseId is in the table, send back user object. 
    const userinDB = await db.getUserByFirebaseID(user.firebaseId); 
    if (!userinDB) {
       const newUser = await db.add(user); 
       res.status(201).json({
        message: `user was successfully added to database.`,
       newUser // returns user object
      });
    } else {
        res.status(200).json(userinDB) // gets user object from firebase ID and returns it
    }
} catch (error) {
    res.status(500).json({ message:  `There was a server error: ${error}`})
}
})



module.exports = router;
