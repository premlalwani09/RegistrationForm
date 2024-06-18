// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCaGEl9q7t6X2OfJrZ3YTK_0qFxJ0vNQnQ",
//   authDomain: "registrationform09.firebaseapp.com",
//   projectId: "registrationform09",
//   storageBucket: "registrationform09.appspot.com",
//   messagingSenderId: "254700188064",
//   appId: "1:254700188064:web:6acb46ae11248a3abeb4c5",
//   measurementId: "G-8TSX0QKXWL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

// document.getElementById('loginForm').addEventListener('submit', loginUser);
// document.getElementById('registerForm').addEventListener('submit', registerUser);

// document.getElementById('showRegisterForm').addEventListener('click', function() {
//   document.getElementById('login-form').style.display = 'none';
//   document.getElementById('register-form').style.display = 'block';
// });

// document.getElementById('showLoginForm').addEventListener('click', function() {
//   document.getElementById('login-form').style.display = 'block';
//   document.getElementById('register-form').style.display = 'none';
// });

// function loginUser(event) {
//   event.preventDefault();
  
//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
      
//       alert("Login successful!");
//       const user = userCredential.user;
//       console.log(user);
      
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       console.error(errorCode, errorMessage);
//     });
// }

// function registerUser(event) {
//   event.preventDefault();
  
//   const email = document.getElementById('registerEmail').value;
//   const password = document.getElementById('registerPassword').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
      
//       alert("Registration successful!");
//       const user = userCredential.user;
//       console.log(user);
      
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       console.error(errorCode, errorMessage);
//     });
// }



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaGEl9q7t6X2OfJrZ3YTK_0qFxJ0vNQnQ",
  authDomain: "registrationform09.firebaseapp.com",
  projectId: "registrationform09",
  storageBucket: "registrationform09.appspot.com",
  messagingSenderId: "254700188064",
  appId: "1:254700188064:web:6acb46ae11248a3abeb4c5",
  measurementId: "G-8TSX0QKXWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  document.getElementById('loginForm').addEventListener('submit', loginUser);
  document.getElementById('registerForm').addEventListener('submit', registerUser);

  document.getElementById('showRegisterForm').addEventListener('click', function() {
    console.log('Switching to register form');
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  });

  document.getElementById('showLoginForm').addEventListener('click', function() {
    console.log('Switching to login form');
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
  });
});

function loginUser(event) {
  event.preventDefault();
  console.log('Login form submitted');
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.error(errorCode, errorMessage);
    });
}

function registerUser(event) {
  event.preventDefault();
  console.log('Register form submitted');
  
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration successful!");
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.error(errorCode, errorMessage);
    });
}
