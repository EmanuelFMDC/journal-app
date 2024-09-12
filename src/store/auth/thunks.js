import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout } from "./"

export const checkingAuthentucation = ( email, password) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = singInWithGoogle();
        if( !result.ok ) dispatch( logout() )
    }
}