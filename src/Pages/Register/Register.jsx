import { RegisterForm } from "components/RegisterForm/RegisterForm";
import {RegisterWrapper, RegisterTitle} from './Register.styled';

export default function Register () {
    return(
        <RegisterWrapper>
            <RegisterTitle>Please register to use additional functionality of the application</RegisterTitle>
            <RegisterForm/>
        </RegisterWrapper>

    );
};
