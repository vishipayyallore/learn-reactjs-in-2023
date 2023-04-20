// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "YourApiKey",
    authDomain: "YourDomain",
    projectId: "realestates-rj",
    storageBucket: "YourBucket",
    messagingSenderId: "YourSenderId",
    appId: "YourAppId",
    measurementId: "YourMeasurementId"
};

// Initialize Firebase with your config
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore();