import {FormInput} from "../formInput/formInput";
import {Button} from "../button/button";
import {useState} from "react";
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

import './signInForm.styles.scss'
import {useNavigate} from "react-router-dom";
import {urls} from "../../utils/urls";

const defaultFormState = {
    email: '',
    password: '',
}

export const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormState)
    const {email, password} = formFields
    const navigate = useNavigate();

    const resetFormFields = () => setFormFields(defaultFormState)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
            navigate(`/${urls.shop}`)
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found': {
                    alert('User not found')
                    break;
                }
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break;
                case 'auth/invalid-email':
                    alert('Invalid email')
                    break;
                case 'auth/invalid-login-credentials':
                    alert('Invalid login credentials')
                    break;
                default:
                    console.log(error)

            }
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    return (
        <div className={'sign-in-container'}>
            <h2>Already have an account?</h2>
            <span>Signed in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={'Email'}
                    type={'email'}
                    onChange={handleChange}
                    name={'email'}
                    value={email}
                    required
                />
                <FormInput
                    label={'Password'}
                    type={'password'}
                    onChange={handleChange}
                    name={'password'}
                    value={password}
                    required
                />
                <div className={'buttons-container'}>
                    <Button type={'submit'}>Sign In</Button>
                    <Button type={'button'} buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}