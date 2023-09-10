import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;
export const UserMenuHi = styled.div`
display: block;
line-height: 0.5;
margin-right: 20px;
`;

export const UserName = styled.p`
font-weight: 700;
color: palevioletred;
`;

export const UserEmail = styled.p`
font-weight: 700;
color: palevioletred;
`;

export const UserMenuBtn = styled.button`
border-radius: 5px;
padding: 5px;
background-color: moccasin;
color: darkslateblue;
margin-right: 20px;
outline: none;
font-weight: 700;
border: 4px solid mediumorchid;
&&: hover,
&&: focus {
    color: whitesmoke;
    background-color: darksalmon;
}
`;