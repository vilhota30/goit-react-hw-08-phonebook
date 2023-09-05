import styled from "@emotion/styled";
export const Item = styled.li`
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
margin-right: 8px;
color: darksalmon;
font-weight: 600;

&:not(:last-child) {
    margin-bottom: 5px;
}
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
color: moccasin;
border-radius: 3px;
border-color: deeppink;
cursor: pointer;
outline: none;
width: 80px;
height: 25px;
background-color: mediumvioletred;
&&:hover,
&&:focus{
    background-color: lightcoral;
    border-color: coral;
    color: white;
}
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 10px;
`;

export const ContactName = styled.p`
  display: flex;
  gap: 10px;
  max-width: 220px;
  width: 180px;
  font-size: 14px;
  font-weight: 600;
`;
export const ContactTel = styled.p`
  display: flex;
  gap: 10px;
  max-width: 220px;
  width: 180px;
  font-size: 14px;
`;

