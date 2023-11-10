import {SignUpForm} from "../../components/signUpForm/signUpForm";
import {SignInForm} from "../../components/signInForm/singInForm";
import styled from "styled-components";

export const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    )
}

const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 900px;
`