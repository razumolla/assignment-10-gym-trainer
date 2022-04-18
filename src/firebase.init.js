import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyC11XIqk4L69KmXl6psi1E9ChLVrN04nHc",
    authDomain: "gym-trainer-assignment.firebaseapp.com",
    projectId: "gym-trainer-assignment",
    storageBucket: "gym-trainer-assignment.appspot.com",
    messagingSenderId: "248829057003",
    appId: "1:248829057003:web:efa86756e52fff319e2bae"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;