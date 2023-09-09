import { useDispatch } from "react-redux";
import { register } from 'redux/Auth/operations';
import { RegisterBtn, RegisterInput, RegisterLabel, RegisterWrapper} from "./RegisterForm.styled";
// import laptop from '../../components/media/laptop-2559958_640.jpg';
import table from '../../components/media/table-4074015_1280.jpg'

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
        <RegisterWrapper style={{ backgroundImage: `url(${table})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "500px" }}>
       <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", marginTop: "110px", marginBottom: "50px"}}autoComplete="off">
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
