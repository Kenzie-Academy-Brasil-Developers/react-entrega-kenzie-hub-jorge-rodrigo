import styled from "styled-components";



export const FormDivStyled = styled.div`
   background-color: var(--color-grey-4);
   margin: 0 auto;
   width: 90%;
   height: 439px;
   border-radius: 5px;

   @media(min-width:750px){
     width: 35%;
   }


   h2{
    background-color: transparent;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 15px;
    font-size: 14px;
    color: var(--color-grey-1);
    @media(min-width:750px){
     font-size: 16px;
   }
   }

   p{
    background-color: transparent;
    text-align: center;
    color: var(--color-grey-2);
    font-size: 9px;
    padding-bottom: 20px;
    @media(min-width:750px){
     font-size: 14px;
   }
   }

   a{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 10px 50px;
    margin: 0 20px;
    text-decoration: none;
    border-radius: 5px;
    color: var(--color-grey-1);
    background-color: var(--color-grey-2);
   }
`


export const FormDivStyledRegister = styled(FormDivStyled)`
   height: 650px;
   margin-bottom: 20px;
   @media(min-width:750px){
      height: 750px;
   }
`

export const FormsStyled = styled.form`
   display: flex;
   flex-direction: column;
   background-color: transparent;
   padding: 10px;
   gap: 5px;

   label{
       background-color: transparent;
       color: var(--color-grey-1);
       font-size: 9px;
       padding-bottom: 5px;
       @media(min-width:750px){
       font-size: 14px;
       }
    }
  
   select{
      width: 99%;
      height: 38px;
      margin-bottom: 8px;
      padding: 4px;
      background-color: var(--color-grey-3);
      outline: 0;
      border: 1px solid var(--color-grey-3);
      border-radius: 5px;
      color: var(--color-grey-2);
   }


  span{
    background-color: transparent;
    color: var(--color-negative);
    padding-bottom: 4px;
   }
`