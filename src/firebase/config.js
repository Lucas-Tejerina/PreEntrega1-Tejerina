
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwa2YAESSaUJKTDaZ-sL3skA_P5vUhTrg",
  authDomain: "proyecto-final-react-js-lucas.firebaseapp.com",
  projectId: "proyecto-final-react-js-lucas",
  storageBucket: "proyecto-final-react-js-lucas.appspot.com",
  messagingSenderId: "760597696483",
  appId: "1:760597696483:web:c93be3766f7dbedd075ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa base de datos
export const db = getFirestore(app);