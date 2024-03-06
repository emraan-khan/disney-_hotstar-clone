import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const Config = {
    apiKey: "AIzaSyDwY26i5DhJewozTuieHpSJal4eFi_qlS0",
    authDomain: "disneyplus-clone-e39cd.firebaseapp.com",
    projectId: "disneyplus-clone-e39cd",
    storageBucket: "disneyplus-clone-e39cd.appspot.com",
    messagingSenderId: "1076619709085",
    appId: "1:1076619709085:web:7b54ede4425d512cefe274"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(Config);
  const db = getFirestore();
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage= getStorage();

  export {auth,provider,storage};
  export default db;