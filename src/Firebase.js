import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {

  apiKey: process.env.REACT_APP_APIKEY,

  authDomain: process.env.REACT_APP_AUTHDOMAIN,

  projectId: process.env.REACT_APP_PROJECTID,

  storageBucket: process.env.REACT_APP_STORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,

  appId: process.env.REACT_APP_APPID,

  measurementId: process.env.REACT_APP_MEASUREMENTID,

  databaseURL: process.env.REACT_APP_DATABASEURL

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