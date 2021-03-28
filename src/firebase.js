import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsODxLYc8dio2zkfnFYRpKRVdeLY2y0II",
  authDomain: "hulu-clone-304e7.firebaseapp.com",
  projectId: "hulu-clone-304e7",
  storageBucket: "hulu-clone-304e7.appspot.com",
  messagingSenderId: "614362003326",
  appId: "1:614362003326:web:9b1bf7a18b0ff73f00652f",
  measurementId: "G-E4QDJMB359"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider }; 
