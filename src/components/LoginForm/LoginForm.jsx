import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import { LoginFormStyled, LoginLabel } from './LoginForm.styled';

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
        <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
            <LoginLabel>
                Email
                <input type="email" name="email"/>
            </LoginLabel>
            <LoginLabel>
                Password
                <input type="password" name="password"/>
            </LoginLabel>
            <button type="submit">Log In</button>
        </LoginFormStyled>
    );
};