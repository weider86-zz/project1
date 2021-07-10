import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        font-size: 14px;
        background-color: #fafafa;
      }
    `;

export { GlobalStyle };
