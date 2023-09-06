 import { NavLink } from 'react-router-dom';
 import styled from "styled-components";
// import { AuthNavLink } from './AuthNav.styled';


const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

export const AuthNav = () => {
    return (
        <div>
            <StyledLink to="/register">
                Register
            </StyledLink>
            <StyledLink to="/login">
                Log In
            </StyledLink>
        </div>
    );
};
