// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbO87Xc8WMV02tpmR6rDiPttIYYaWmN84",
  authDomain: "enigma-era.firebaseapp.com",
  projectId: "enigma-era",
  storageBucket: "enigma-era.appspot.com",
  messagingSenderId: "117150374013",
  appId: "1:117150374013:web:51922c3e754705705bb914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;