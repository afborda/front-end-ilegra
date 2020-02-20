import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing:border-box;
   }

   body{
     font-family:"Roboto", "Helvetica", "Arial", sans-serif;
     background:#000;
     display:flex;
     flex-wrap:wrap;
     justify-content:center;

   }
  
`;

export default GlobalStyle;
