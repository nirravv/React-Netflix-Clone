import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCR4aP9r8zOi2Dpqe-jQmPQQNa3eg5qzDM",
  authDomain: "netflix-clone-fbbc9.firebaseapp.com",
  projectId: "netflix-clone-fbbc9",
  storageBucket: "netflix-clone-fbbc9.appspot.com",
  messagingSenderId: "1020009766794",
  appId: "1:1020009766794:web:71fc0b604f60bfbab0f273",
  measurementId: "G-P5D9DK0REF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
