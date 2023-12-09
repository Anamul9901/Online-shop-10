/* eslint-disable react/prop-types */
import {  createContext, useContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../forebase/firebase.console";

 
 export const AuthContext = createContext(null);
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();
 
 export function useDarkMode() {
    return useContext(AuthContext);
  }

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false); // dark 

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };

    const signUpWithEmail = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutFromAll = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    useState(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log('currentUsaer', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    })


    const authInfo = {
        signUpWithEmail,
        signInWithEmail,
        signOutFromAll,
        googleSignIn,
        user,
        loading,
        toggleDarkMode, // dark
        isDarkMode // dark
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;