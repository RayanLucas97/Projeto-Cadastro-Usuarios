import styled from "styled-components";

export const Button = styled.button`
background: ${ props => props.theme === "primary" ? "linear-gradient( 180deg, #FE7E5D, #ff6378)" : "transparent"};
border: ${ props => props.theme === "primary" ? "none" : "1px solid #fff"};
border-radius: 30px;
color: #fff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;

&:hover{
    opacity: ${props => props.theme === "primary" ? " 0.8": "0.6"};
    background: ${props => props.theme === "primary" ? "linear-gradient( 180deg, #FE7E5D, #ff6378)" : "color: #f34444" };
}

&:active{
    opacity: 0.5;
}

`
