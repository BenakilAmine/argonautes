import firebase from "firebase";

const firebaseConfig = {
  apiKey:
    "AAAAhPj2ppA:APA91bGdJ6nWkSYOU1nzELgXaNTyDwO5mCe4eAmaTfOH7iIeTMGN3_otbgG_3t0RGJa_G_M6nnWwal-dvV_L4qp27UpEwDfIREw0eWCbpDU7AOlpR2qfKHvbVWyKb2EHwaYSN9bbEEvh",
  authDomain: "argonautes-ec316.firebaseapp.com",
  databaseURL:
    "https://argonautes-ec316-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "bucket.appspot.com",
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export default database;
