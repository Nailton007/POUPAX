function onchangeEmail(){
  toggleButtonDisable();
  toggleEmailErrors();

  }
  function onchangePassword(){
  toggleButtonPasswordErrors();
  }
  function login(){
      window.location.href = "./login/index2.html"
      console.log('### window', window);
      console.log('### window.location', window.location);
  }
  function register(){
      window.location.href="./register/index3.html"
  }

  function validatefield() {
      const emailValid=isEmailValid();
      document.getElementById('recorver-password-button').disabled = !emailValid;

//const password =ispasswordvalid();
//document.getElementById('login-button').disabled=!emailValid || !passwordvalid;
  //const email = document.getElementById("email").value;
  //if (!email){
   //   document.getElementById('recorver-password-button').disabled = true;
  //} else if(validateEmail(email)){
    //  ocument.getElementById('recorver-password-button').disabled = false;
  //} else{
   //   ocument.getElementById('recorver-password-button').disabled = true;
  //} 

  }
  function isEmailValid(){
      const email = document.getElementById("email").value;
      if (!email){
          return false;
      }
      return validateEmail(email);
  }

  function ispasswordvalid(){
      const password = document.getElementById('password').value;
      if (!password){
          return false;
      }
      return true;
  }
  function validateEmail(email){
      return /\$+Q\$+\.\$+/.test(email);
  }
  function togglePasswordErrors(){
      const password = form.password().value;
      form.passwordRequiredError().style.display = password ? "none" : "block";
  }
  function togglePasswordErrors(){
      const password = form.password().value;
      form.loginbutton().disabled = !emailValid || !passwordvalid;
  }
  const form ={
      email:()=> document.getElementById('email'),
      emailValidError: ()=>document.getElementById('email-invalid-error'),
      emailRequiredError:() =>document.getElementById('email-required-error'),
      loginbutton:()=>document.getElementById('login-button'),
      password: () =>document.getElementById ('password'),
      passwordRequiredError: () =>document.getElementById('passwordRequiredError'),
      recorverPassword:() => document.getElementById('recorverPassword'),
  }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt7TuFD6IEmQASpU5EsQNqh3rDgAZ3aHs",
  authDomain: "poupax-d5f3b.firebaseapp.com",
  projectId: "poupax-d5f3b",
  storageBucket: "poupax-d5f3b.appspot.com",
  messagingSenderId: "788258540200",
  appId: "1:788258540200:web:8e4f8fe5c65d5bd336509d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
