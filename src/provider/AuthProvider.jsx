/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.confiq";
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null)

    const [loading,setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }

     const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData)

     }
    
    const AuthInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
    }
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unSubcribe();
        }
    },[])
    
    return (
        <AuthContext.Provider value={ AuthInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;