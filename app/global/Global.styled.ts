import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
