import { initializeApp } from "firebase/app";

function initialiseFirebase() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration goes here
  const firebaseConfig = {
    apiKey: "AIzaSyDQd_D_5sPTyI8r7w4rVKNiN83nkLUM35c",
    authDomain: "playground-675cd.firebaseapp.com",
    databaseURL:
      "https://playground-675cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "playground-675cd",
    storageBucket: "playground-675cd.appspot.com",
    messagingSenderId: "96829841844",
    appId: "1:96829841844:web:5c49bae7a6fd91558952e1",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}

export default initialiseFirebase;
