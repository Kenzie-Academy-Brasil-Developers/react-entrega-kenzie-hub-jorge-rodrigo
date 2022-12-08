import styled from "styled-components";

export const TechListStyled = styled.ul`
   background-color: var(--color-grey-4);
   display: flex;
   flex-direction: column;
   gap: 25px;
   list-style: none;
   padding: 35px 15px;
   margin: 10px 15px;
   border-radius: 8px;
   transition: 0.8s;

   @media(min-width: 760px){
    margin: 10px auto;
    width: 55%
   }

   li{
    background-color: var(--color-grey-5);
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    color: var(--color-grey-1);
    transition: 0.8s;
    :hover{
        background-color: var(--color-grey-3);
    }
   }

   li > h2{
    font-size: 18px;
    background-color: transparent;
   }
   li > P{
    font-size: 14px;
    background-color: transparent;
   }
`