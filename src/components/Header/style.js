import styled, { css } from "styled-components"

export const TitleHeader = styled.header`
display: flex;
justify-content: space-between;
padding: 0 15px;
margin-top: 50px;
padding-bottom: 15px;

${ ({ page }) => {
    switch(page) {
      default: case "dashboard":
         return css`
          margin-top: 20px;
         `;
    }
}}
@media(min-width:700px){
    margin: 30px auto;
    ${({ page }) => {
        switch (page) {
            default: case"register":
                return css`
                  width: 38%;
                `;
            case "dashboard" :
                 return css`
                   width: 55%;
                 `;
        }
    }}
}

h2{
    color: var(--color-primary);
    font-size: 20px;
    @media(min-width:750px){
     font-size:25px;
     padding-top: 18px;
   }
}

a{
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   padding: 5px 10px;
   text-decoration: none;
   border-radius: 5px;
   font-size: 12px;
   color: var(--color-grey-1);
   background-color: var(--color-grey-4);
   @media(min-width:750px){
     font-size:16px;
     padding: 8px 30px;
   }
}
`