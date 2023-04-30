import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,  email, password);
}

const logOut = () =>{
    setLoading(true);
    signOut(auth);
}

useEffect(() =>{
  const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
        console.log("logged in user inside auth sate observer", loggedUser);
        setUser(loggedUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
}, [])



const authinfo = { user, loading, createUser, signIn, logOut }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;