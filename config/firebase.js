var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.firebase.js");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// database
const db = admin.firestore();

// exporting it so we can use it on the other files
module.exports = db;