import styled from '@emotion/styled';

export const RegisterWrapper = styled.div`
display: flex;
justify-content: center;
height: 500px;
padding: 50px;
border-radius: 10px;
// background-color: blueviolet;
box-shadow: rgba(46, 0, 0, 0.5) 5px 13px 18px
`;

export const RegisterFormStyled = styled.div`
width: 380px;
display: flex;
flex-direction: column;
padding; 12px 15px;
justify-content: center;
align-items: center;
border-radius: 12px;
gap: 10px;
`;

export const RegisterLabel = styled.label`
margin-bottom: 10px;
width: 20px;
color: moccasin;
display: block;
font-weight: 600;
`;

export const RegisterInput = styled.input`
padding: 8px;
border-radius: 3px;
border-color: blueviolet;
outline: none;
font-size: 16px;
color: lavender;
font-weight: 600; 
width: 280px;
margin-left: 8px;
background-color: mediumslateblue;
&&:hover,
&&:focus{
   border-color: darksalmon;;
   background-color: darkmagenta;
}
`;

export const RegisterBtn = styled.button`
margin-left: 30px;
padding: 8px;
min-width: 250px;
color: moccasin;
border-radius: 3px;
border-color: deeppink;
outline: none;
font-size: 16px;
font-weight: 700;
cursor: pointer;
background-color: mediumvioletred;
transition: all 250ms ease-in-out;
&&:hover,
&&:focus{
    background-color: lightcoral;
    border-color: coral;
    color: white;
}
`;