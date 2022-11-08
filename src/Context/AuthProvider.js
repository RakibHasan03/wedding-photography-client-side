import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    };
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user of on auth', currentUser);
            setUser(currentUser)

            setLoading(false)


        });
        return () => {
            unsubscribe();
        }
    }, [])

   const authInfo = {user ,createAccount, updateUserProfile,}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;