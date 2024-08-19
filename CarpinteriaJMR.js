import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"; //https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-auth.js
//import { getAnalytics } from "/firebase/analytics";
import { updateDoc, doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
//import {getStorage, ref } from"https://cdnjs.cloudflare.com/ajax/libs/firebase/10.2.0/firebase-storage.min.js"
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyBkOHyPq-BZKk1MH8XIV-bBmtIQ8Qaoa14",
    authDomain: "carpinteriasession-77061.firebaseapp.com",
    projectId: "carpinteriasession-77061",
    storageBucket: "carpinteriasession-77061.appspot.com",
    messagingSenderId: "993686690078",
    appId: "1:993686690078:web:295cfd1bf9b55eff8b110f",
    measurementId: "G-6EWZW4NHTW"
};