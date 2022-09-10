import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDwEQlkPys7JznqnhfRkLD-_I0XhhMV-N4",
    authDomain: "netflix-clone-eeb29.firebaseapp.com",
    projectId: "netflix-clone-eeb29",
    storageBucket: "netflix-clone-eeb29.appspot.com",
    messagingSenderId: "228006714680",
    appId: "1:228006714680:web:38ac02eeceeb596b92b5cd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const db = app.firestore();
  const auth=getAuth(app);
  export {auth};
  export default app;