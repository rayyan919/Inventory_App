import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYiDuMulbMzQmI7-OL2vGPswi2loWqxf4",
  authDomain: "pantry-app-1909.firebaseapp.com",
  projectId: "pantry-app-1909",
  storageBucket: "pantry-app-1909.appspot.com",
  messagingSenderId: "975210588433",
  appId: "1:975210588433:web:23986acef05cc4ee3744b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app)
export { firestore };
