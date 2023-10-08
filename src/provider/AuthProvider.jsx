import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name, photoUrl) =>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Update user's profile with additional info
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl,
                }).then(() => {
                    setLoading(false);
                    return userCredential; // Return the entire userCredential
                });
            })
            .catch((err) => {
                setLoading(false);
                // Handle errors
                throw err;
            });
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            // console.log('user in the auth state changed', currentUser)
            setUser(currentUser)});
            setLoading(false);

            return () => {
                unSubscribe();
            }
    },[])


    const authInfo = {
        user, createUser, logOut, signIn, loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;