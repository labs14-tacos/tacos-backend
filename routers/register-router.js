const express = require('express');
const db = require('../data/models/users-model');
const router = express.Router();


// router.post('/', async (req, res) => {
//     const user = req.body; // pulls user object out of firebase token after decodeBody middleware 
//     try {
//       // if firebaseId is NOT in the table, add it to the table and send back user object. 
//     // if firebaseId is in the table, send back user object. 
//     const userinDB = await db.getUserByFirebaseID(user.firebaseId); 
//     if (!userinDB) {
//        const newUser = await db.add(user); 
//        res.status(201).json({
//         message: `user was successfully added to database.`,
//        newUser // returns user object
//       });
//     } else {
//         res.status(200).json(userinDB) // gets user object from firebase ID and returns it
//     }
// } catch (error) {
//     res.status(500).json({ message:  `There was a server error: ${error}`})
// }
// })

//  router.post('/register', async (req, res) => {
//   const { user } = req.body;
//   try {
//     const addNewUser = await db.add(user);
//     console.log('from addNewUser', addNewUser);
//     res.status(201).json({
//       message: `user was successfully added to database.`,
//       addNewUser, // returns the user that is on SQL table
//     });
//   } catch (err) {

//     res.status(500).json({ message: `There was an error: ${err}`});
//   }
// });

 router.post('/login', (req, res) => {
  const { user } = req.body;
   try {
    const loggedInUser = db.getUserByFirebaseID(user.firebaseId);
    if (!loggedInUser) {
     res.status(404).json({message: 'User is not on our table'})
    }
    res.status(200).json(loggedInUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `There was an error: ${err}` });
  }
});


module.exports = router;
