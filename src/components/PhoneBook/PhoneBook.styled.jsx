import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: column;
padding; 12px 15px;
justify-content: center;
align-items: center;
border-radius: 12px;
gap: 10px;
`;
export const FormContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`;


export const LabelForm = styled.label`
margin-right: 20px;
font-weight: 600;
font-size: 18px;
color: darkslateblue;
`;

export const Input = styled.input`
padding: 8px;
border-radius: 3px;
border-color: blueviolet;
outline: none;
font-size: 16px;
color: brown;
font-weight: 600; 
width: 280px;
margin-left: 8px;
background-color: moccasin;
&&:hover,
&&:focus{
   border-color: darksalmon;
   background-color: darksalmon;
}
`;

export const Button = styled.button`
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