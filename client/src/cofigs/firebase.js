import { initializeApp } from "firebase/app";

function initialiseFirebase() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration goes here

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}

export default initialiseFirebase;
