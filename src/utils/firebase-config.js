import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAR_AETgTkXXNCoxCQr0RjYGfdIgCECLeM",
    authDomain: "react-netflix-clone-61d4d.firebaseapp.com",
    projectId: "react-netflix-clone-61d4d",
    storageBucket: "react-netflix-clone-61d4d.appspot.com",
    messagingSenderId: "459970720739",
    appId: "1:459970720739:web:72b07c5ebc80383ea1e6d6",
    measurementId: "G-Q9QF52NHYG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);




