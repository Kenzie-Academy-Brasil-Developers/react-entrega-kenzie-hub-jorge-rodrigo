import styled from "styled-components";


export const ModalBackground = styled.div`
    display: flex;
    justify-content: center;
`

export const ModalDivStyled = styled.div`
    background-color: var(--color-grey-4);
    width: 90%;
    position: fixed;
    top: 150px;
    border-radius: 4px;
    padding-bottom: 25px;
    @media(min-width: 760px){
    width: 25%;
   }

    div{
      background-color: var(--color-grey-3);
      color: var(--color-grey-1);
      display: flex;
      justify-content: space-between;
      font-size: 8px;
      padding: 14px 10px;
      border-radius: 4px;
      @media(min-width: 760px){
        margin-bottom: 15px;
      }
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

    form div{
      background-color: transparent;
      display: flex;
      justify-content: space-around;
    }
    form div button{
      background-color: var(--color-primary);
      color: var(--color-grey-1);
      width: 70%;
      height: 40px;
      border-radius: 8px;
    }
    form div button:last-child{
      background-color: var(--color-grey-2);
      color: var(--color-grey-1);
      width: 30%;
    }
`
