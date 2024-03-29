import styled from "styled-components";

export const ButtonStyled = styled.button`

    width: 100%;
    height: 38px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: var(--color-grey-1);
    margin: 10px 0;
    border-radius: 5px;
    transition: 0.8s;
    position: relative;
    overflow: hidden;

    :hover{
        background-color:  var(--color-primary-focus);
    }
   
    img{
        width: 10%;
        height: 85%;
        background-color: transparent;
    }
`