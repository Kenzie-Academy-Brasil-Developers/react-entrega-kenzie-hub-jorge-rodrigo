import styled from "styled-components";


export const InputStyled = styled.fieldset`
    background-color: var(--color-grey-4);
    margin: 0 auto;
    width: 100%;
    border: none;

    label{
       background-color: transparent;
       color: var(--color-grey-1);
       font-size: 9px;
       padding-bottom: 5px;
       @media(min-width:750px){
       font-size: 14px;
       }
    }

    input{
      width: 99%;
      height: 38px;
      margin-bottom: 8px;
      margin-top: 4px;
      padding: 2px;
      background-color: var(--color-grey-3);
      outline: 0;
      border: 1px solid var(--color-grey-3);
      border-radius: 5px;
      color: var(--color-grey-2);
    }

`