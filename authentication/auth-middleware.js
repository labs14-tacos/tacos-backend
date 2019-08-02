const admin = require('./firebaseAdmin.js');


// This is the middleware that checks whether the token sent on the body of the request (first request in the app when someone logs in) is valid.
function decodeBody(req, res, next) {
  const { token } = req.body;

  if (token) {
    admin
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.body.user = {
          email: decodedToken.email,
          firebaseId: decodedToken.uid
        };

        next();
      })
      .catch(err => {
        res.status(401).json({ message: 'Invalid token!', err });
      });
  } else {
    res.status(401).json({
      Message: `You are missing an authentication token. Please login to obtain one!`,
    });
  }
}

// This is the middleware that checks whether the token sent on the header of the request from the front end is valid.
function decodeHeader(req, res, next) {
  const { token } = req.headers;
  if (token) {
    admin
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.headers.user = {
          email: decodedToken.email,
          firebase_uuid: decodedToken.uid
        };

        next();
      })
      .catch(err => {
        res.status(500).json({ Message: `Token error!`, err });
      });
  } else {
    res.status(401).json({
      Message: `You are missing an authentication token. Please login to obtain one!`,
    });
  }
}

module.exports = {
    decodeBody,
    decodeHeader,
  };
