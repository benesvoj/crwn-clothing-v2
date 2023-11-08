import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup()
        console.log(response)
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }

    return(
        <div>
            <h1>Signed In</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    )
}
