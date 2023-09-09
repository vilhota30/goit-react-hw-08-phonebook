import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import { LoginWrapper, LoginLabel, LoginInput, LoginBtn } from './LoginForm.styled';
import blank from '../../components/media/blank-792125_1280.jpg';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        dispatch(logIn({
               email: form.elements.email.value,
               password: form.elements.password.value,
        })
        );
        form.reset();
    };

    return (
        <LoginWrapper style={{ backgroundImage: `url(${blank})`, backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", height: "400px" }}>
        <form onSubmit={handleSubmit} autoComplete="off" style={{display: "flex", flexDirection: "column", marginTop: "90px"}} >
            <LoginLabel>
                Email
                <LoginInput type="email" name="email"/>
            </LoginLabel>
            <LoginLabel>
                Password
                <LoginInput type="password" name="password"/>
            </LoginLabel>
            <LoginBtn type="submit">Log In</LoginBtn>
        </form>
        </LoginWrapper>
    );
};
