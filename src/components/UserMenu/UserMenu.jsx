import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuWrapper, UserName, UserEmail, UserMenuHi, UserMenuBtn} from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return (
        <UserMenuWrapper>
            <UserMenuHi>
            <UserName>Welcome, {user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            </UserMenuHi>
        <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>LogOut</UserMenuBtn>
        </UserMenuWrapper>
    );
};