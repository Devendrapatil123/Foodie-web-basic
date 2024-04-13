
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCRaaf9LnVKRaV5P7rZIS8_Q7Ab_rHny54",
  authDomain: "foodieweb-705d6.firebaseapp.com",
  projectId: "foodieweb-705d6",
  storageBucket: "foodieweb-705d6.appspot.com",
  messagingSenderId: "698719901263",
  appId: "1:698719901263:web:5ecb2290860256ef45bc3a",
  measurementId: "G-Q8V0J72N6D"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export {app,auth,db}
