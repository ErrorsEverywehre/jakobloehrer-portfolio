// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1_VgNoYce6vxaNdQ5GUiqBSU_ARzx-qY",
  authDomain: "jakobloehrer-portfolio.firebaseapp.com",
  projectId: "jakobloehrer-portfolio",
  storageBucket: "jakobloehrer-portfolio.firebasestorage.app",
  messagingSenderId: "1089641235676",
  appId: "1:1089641235676:web:75893793428ab2b7f2a019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
