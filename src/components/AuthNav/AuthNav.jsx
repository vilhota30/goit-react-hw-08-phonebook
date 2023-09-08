 import { NavLink } from 'react-router-dom';
 import styled from "styled-components";
// import { AuthNavLink } from './AuthNav.styled';


const StyledLink = styled(NavLink)`
  color: blueviolet;
  background-color: moccasin;
  font-weight: 700;
  text-decoration: none;
  border-radius: 3px;
  padding: 3px;
  margin-right: 20px;


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
