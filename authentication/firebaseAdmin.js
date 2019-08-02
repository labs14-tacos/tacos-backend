const admin = require('firebase-admin');

// This is what connects our backend to our Frontend.

const serviceAccount = {
    // This is all of the info from the service account json object
 type: "service_account",
 project_id: process.env.FB_PROJECT_ID,
 private_key_id: process.env.FB_PRIVATE_KEY_ID,
 private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
 client_email: process.env.FB_CLIENT_EMAIL,
 client_id: process.env.FB_CLIENT_ID,
 auth_uri: process.env.FB_AUTH_URI,
 token_uri: process.env.FB_TOKEN_URI,
 auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER_X509,
 client_x509_cert_url: process.env.FB_CLIENT_X509
};


admin.initializeApp({
   credential: admin.credential.cert(serviceAccount), 
   databaseURL: "https://staging-tacos.firebaseio.com" // the url given to us from firebase
});

module.exports = admin;