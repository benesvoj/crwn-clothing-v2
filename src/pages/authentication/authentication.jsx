import {SignUpForm} from "../../components/signUpForm/signUpForm";
import {SignInForm} from "../../components/signInForm/singInForm";

import './authentication.styles.scss'

export const Authentication = () => {

    return (
        <div className={'authentication-container'}>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
