import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseconfig.js";
import {
  getAuth,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);
const provider = new GoogleAuthProvider();

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

//custom hook
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const onetaplogin = () => {
    signInAnonymously(firebaseAuth)
      .then(() => {
        console.log("logged in");
      })
      .catch((error) => {
        console.log(" ontap login :" + error);
      });
  };
  const googlelogin = () => {
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        console.log("logged in");
      })
      .catch((error) => {
        console.log("google login :" + error);
      });
  };
  
  return (
    <FirebaseContext.Provider value={{ onetaplogin, googlelogin}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
