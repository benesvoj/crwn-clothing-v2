import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import {FormInput} from "../formInput/formInput";

import Button from "../button/button";
import {SingUpFormContainer, SingUpTitle} from "./signUpForm.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields


    const resetFormFields = () => setFormFields(defaultFormFields)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, {displayName})

            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            } else {
                console.log(error)
            }
        }
    }

    return (
        <SingUpFormContainer>
            <SingUpTitle>Don't have an account?</SingUpTitle>
            <span>Sing up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} type={'text'} name={'displayName'} value={displayName}
                           onChange={handleChange} required/>
                <FormInput label={'Email'} type={'email'} onChange={handleChange} name={'email'} value={email}
                           required/>
                <FormInput label={'Password'} type={'password'} onChange={handleChange} name={'password'}
                           value={password} required/>
                <FormInput label={'Confirm password'} type={'password'} onChange={handleChange} name={'confirmPassword'}
                           value={confirmPassword}
                           required/>
                <Button type={'submit'}>Sing Up</Button>
            </form>
        </SingUpFormContainer>
    )
}