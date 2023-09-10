import { NavLink } from 'react-router-dom';
import {useAuth} from 'hooks/useAuth';
import styled from "styled-components";
// import { StyledLink } from './Navigation.styled';

const StyledLink = styled(NavLink)`
color: blueviolet;
background-color: moccasin;
font-weight: 700;
text-decoration: none;
padding: 3px;
border-radius: 3px;
margin-left: 20px;


&.active {
  color: whitesmoke;
  background-color: darksalmon;
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
