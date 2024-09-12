import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuh } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async()=> {
    try {
        const result = await signInWithPopup(FirebaseAuh, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {        
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    // ...
        return {
            ok: false,
            errorMessage
            }
        }
}