// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMWmIIH1BYHR4UnSdTuBx3AFLPfJBVvuU",
    authDomain: "activities-site.firebaseapp.com",
    projectId: "activities-site",
    storageBucket: "activities-site.appspot.com",
    messagingSenderId: "56606816031",
    appId: "1:56606816031:web:655a8c625c7135d546222a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;