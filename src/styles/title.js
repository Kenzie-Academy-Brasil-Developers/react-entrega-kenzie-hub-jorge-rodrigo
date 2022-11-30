import styled from "styled-components";


export const TitleStyled = styled.h1`
    color: var(--color-primary);
    margin-top: 70px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    margin-top: 50px;
    margin-bottom: 15px;
    @media(min-width:700px){
        margin: 30px auto;
        width: 35%;
    }

    h2{
        color: var(--color-primary);
        font-size: 20px;
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
         padding: 6px 18px;
       }
    }
`