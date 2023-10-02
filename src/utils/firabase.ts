import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAXCg-_Z17ptLBSx4GZ-276w6NwuTnWcA",
  authDomain: "fir-buyflow-project.firebaseapp.com",
  projectId: "fir-buyflow-project",
  storageBucket: "fir-buyflow-project.appspot.com",
  messagingSenderId: "127809016435",
  appId: "1:127809016435:web:85ffe2c5512737a48c9006",
  measurementId: "G-BP1KSR4PR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {analytics, logEvent}