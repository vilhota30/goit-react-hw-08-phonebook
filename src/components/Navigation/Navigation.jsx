import { NavLink } from 'react-router-dom';
import {useAuth} from 'hooks/useAuth';
import styled from "styled-components";
// import { StyledLink } from './Navigation.styled';

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {

  const {isLoggedIn} = useAuth();
  
  return (
    <nav>
        <StyledLink to="/">
           Home
        </StyledLink>
        {isLoggedIn && (
        <StyledLink to="/App">
           Contacts   
        </StyledLink>
        )}
    </nav>
  );

};
