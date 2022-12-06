import styled from "styled-components";


export const ModalBackground = styled.div`
    display: flex;
    justify-content: center;
`

export const ModalDivStyled = styled.div`
    background-color: var(--color-grey-4);
    width: 90%;
    height: 294px;
    position: fixed;
    margin-top: 150px;
    border-radius: 4px;

    div{
      background-color: var(--color-grey-3);
      color: var(--color-grey-1);
      display: flex;
      justify-content: space-between;
      font-size: 8px;
      padding: 14px 10px;
      border-radius: 4px;
    }
    div > h1{
        background-color: transparent;
        padding-top: 5px;
    }
    div > button{
        color: var(--color-grey-2);
        background-color: transparent;
        border: none;
        margin-right: 10px;
        font-size: 16px;
    }
    
`