import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuWrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return (
        <UserMenuWrapper>
            <UserName>Welcome, {user.name}</UserName>
        <button type="button" onClick={() => dispatch(logOut())}>LogOut</button>
        </UserMenuWrapper>
    );
};