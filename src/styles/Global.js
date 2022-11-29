import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family:'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    }
    
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     background-color: var(--color-grey-5);
     font-family:'Inter', sans-serif;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-1: #F8F9FA;
        --color-grey-2: #868E96; 
        --color-grey-3: #343B41;
        --color-grey-4: #212529;
        --color-grey-5: #121214;
        --color-sucess:#3FE864 ;
        --color-negative: #E83F5B;

    }

    button{
        cursor: pointer;
    }
`


