import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: red;
    --primary-color: #ACACAC;
    --secundary-color: #F5F5F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
