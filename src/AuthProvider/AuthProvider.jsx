import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider()
    const auth = getAuth(app);
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    console.log(user)

    // google log in 
    const googleLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    // creat with email and pass

    const creatUserWithEmail=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Sign in user with email and pass

    const signInWithEmail=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout user

    const signOutUser=()=>{
       setLoader(true)
        return signOut(auth)
    }

    // update user profile
    const updateUserProfile=(data)=>{
        setLoader(true)
        return updateProfile(auth.currentUser,data)
    }

    // observer user
    useEffect(()=>{
        const unSubcribe= onAuthStateChanged(auth,async currentUser=>{
           setUser(currentUser)
           setLoader(false)

           if(currentUser?.email){
             const{data}=await axios.post(`${import.meta.env.VITE_URL}/jwt`,{email:currentUser?.email},{withCredentials:true})
                
           }
           else{
            const {data}= await axios.get(`${import.meta.env.VITE_URL}/logout`,{withCredentials:true})
           }
        })
        return ()=> unSubcribe()
    },[])

    const authInfo = {
        user,
        loader,
        googleLogIn,
        signOutUser,
        creatUserWithEmail,
        signInWithEmail,
        updateUserProfile
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;