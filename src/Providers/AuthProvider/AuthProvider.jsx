import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});

    // Sign in with google popup
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                alert('Success')
            })
            .catch(err => {
                alert(err.message)
            })
    }
    // sign in with gitHub
    const signInGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                alert("Success");
            })
            .catch(err => {
                alert(err.message)
            })
    }
    // sign in with email password
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                alert("loggedIn")
            })
            .catch(err => {
                alert(err.message);
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
                    alert("Success")
                })
                .catch(err=>{
                    alert(err.message)
                })
            })
            .catch(err => {
                alert(err.message)
            })
    }


    // Sign Out user
    const signOutUser = () => {
        signOut(auth)
            .then(result => {
                alert("LoggedOut")
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    // Keep logged in 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;