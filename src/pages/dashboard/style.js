import styled from "styled-components";

export const HeaderDivStyled = styled.div`
    border-bottom: 1px solid var(--color-grey-3);
`
export const Container = styled.div`
 @media(min-width:700px){
        max-width: 1000px;
        margin: 0 auto;
        width: 55%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const InfoDivStyled = styled.div`
   margin-top: 40px;
   display: flex;
   flex-direction: column;
   padding-bottom: 45px ; 
   padding-left: 10px;
   border-bottom: 1px solid var(--color-grey-3);

   h2{
     color: var(--color-grey-1);
     font-size: 18px;
     margin-bottom: 15px;
     @media(min-width:700px){
        margin-bottom: 0;
     }
   }

   p{
      color: var(--color-grey-2);
      font-size: 14px;
   }
`


export const TechDivStyled = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px 15px;
   
   @media(min-width: 760px){
    margin: 10px auto;
    width: 55%
   }
   

   h2{
     color: var(--color-grey-1);
     padding-top: 5px;
     font-size: 16px;
     @media(min-width: 760px){
      font-size: 18px;
     }
   }

   button{
      height: 28px;
      width: 32px;
      text-align: center;
      background-color: var(--color-grey-4);
      color: var(--color-grey-1);
      border: none;
      border-radius: 4px;
      transition: 0.8s;
      :hover{
         background-color: var(--color-grey-3);
      }
      @media(min-width: 760px){
         font-size: 18px;
         width: 40px;
         height: 40px;
      }
      
   }
`