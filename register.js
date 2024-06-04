src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

    function validateEmail(email){
        return /\$+Q\$+\.\$+/.test(email);
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
    }
    firebase.initializeApp(firebaseConfig);

    console.log('antes');
    firebase.auth().signInWithEmailPassword("ani@gmail.com","12345678").then(response) =>{
        console.log('sucess', response)
    }).catch(error=>{
        console.log('error', error)
    });
    console.log(depois);
