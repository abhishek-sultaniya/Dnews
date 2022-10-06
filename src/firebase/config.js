// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGdHac2Z8JQnJld4BPJ1dakkg3TJKC7yo",
  authDomain: "news-vue-sdg.firebaseapp.com",
  projectId: "news-vue-sdg",
  storageBucket: "news-vue-sdg.appspot.com",
  messagingSenderId: "862119308623",
  appId: "1:862119308623:web:9e7af63cdc2c392698293a"
};

// init firebase
// firebase.initializeApp(firebaseConfig)
initializeApp(firebaseConfig);
// firebase.app;

// init firestore service
// const projectFirestore = firebase.firestore()
const projectFirestore = getFirestore();

// export firestore
export { projectFirestore }