import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import swal from 'sweetalert';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading,setLoading] = useState(true)

    const [user, setUser] = useState({});

    // Sign in with google popup
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                swal("Logged In", "Successfully Logged In", "success");
            })
            .catch(err => {
                swal("Error", `${err.message}`, "error");
            })
    }
    // sign in with gitHub
    const signInGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                swal("Logged In", "Successfully Logged In", "success");
            })
            .catch(err => {
                swal("Error", `${err.message}`, "error");
            })
    }
    // sign in with email password
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                swal("Logged In", "Successfully Logged In", "success");
            })
            .catch(err => {
                swal("Error", `${err.message}`, "error");
            })
    }

    // create user with email and Password
    const createUser = (email, password,name,photoURL) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateProfile(auth.currentUser,{
                    displayName: name, photoURL: photoURL
                })
                .then(res=>{
                    swal("Created Account", "Successfully Created", "success");
                })
                .catch(err=>{
                    swal("Error", `${err.message}`, "error");
                })
            })
            .catch(err => {
                swal("Error", `${err.message}`, "error");
            })
    }


    // Sign Out user
    const signOutUser = () => {
        signOut(auth)
            .then(result => {
                swal("Logged Out", "Successfully Logged Out", "success");
            })
            .catch(err => {
                swal("Error", `${err.message}`, "error");
            })

    }

    // Keep logged in 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        setLoading(true);

        })
        return unsubscribe;
    }, [])

    // send all required data via context as abject
    const authInfo = {
        signInWithEmailPassword,
        signInGoogle,
        signOutUser,
        signInGithub,
        createUser,
        user,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;