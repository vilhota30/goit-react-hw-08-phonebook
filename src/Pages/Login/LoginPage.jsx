import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginWrapper, LoginTitle } from "./LoginPage.styled";
export default function Login () {
    return(
        <LoginWrapper>
            <LoginTitle style={{color: "darkslateblue"}}>Please enter the correct password</LoginTitle>
            <LoginForm/>
        </LoginWrapper>
    );
};

