import { useDispatch } from "react-redux";
import { register } from 'redux/Auth/operations';
import { RegisterBtn, RegisterInput, RegisterLabel, RegisterWrapper} from "./RegisterForm.styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })

        )
        form.reset();
    
    };
  
    return(
        <RegisterWrapper>
       <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column" }}autoComplete="off">
          <RegisterLabel>
            Username
            <RegisterInput type="text" name="name"/>
          </RegisterLabel>
           <RegisterLabel>
            Email
            <RegisterInput type="email" name="email"/>
           </RegisterLabel>
           <RegisterLabel>
            Password
            <RegisterInput type="password" name="password"/>
           </RegisterLabel>
           <RegisterBtn type="submit">Register</RegisterBtn>
       </form>
       </RegisterWrapper>
    );
};
