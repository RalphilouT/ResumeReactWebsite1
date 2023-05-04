import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {

  apiKey: "AIzaSyDkR5-poVe95qL_aWEuZUedwd6onCM51pQ",

  authDomain: "ralphilouresume.firebaseapp.com",

  projectId: "ralphilouresume",

  storageBucket: "ralphilouresume.appspot.com",

  messagingSenderId: "497731093415",

  appId: "1:497731093415:web:accc7c71fe7052c994ec82",

  measurementId: "G-VZE82NHGFD",

  databaseURL: "https://ralphilouresume-default-rtdb.firebaseio.com/"

};

const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

function writeUserData(NAME, EMAIL, SUBJECT, MESSAGE) {
    const db = getDatabase(app);
    set(ref(db, 'users/' + NAME), {
      Name: NAME,
      Email: EMAIL,
      Subject : SUBJECT,
      Message : MESSAGE
    });
  }

export default writeUserData;