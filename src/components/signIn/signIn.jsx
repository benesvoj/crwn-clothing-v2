import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import {getRedirectResult} from "firebase/auth";
import {useEffect} from "react";
import {SignUpForm} from "../signUpForm/signUpForm";

export const SignIn = () => {

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user)
        }
    }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }

    return (
        <div>
            <h1>Signed In</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <br/>
            <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>

            <br />
            <SignUpForm />
        </div>
    )
}
