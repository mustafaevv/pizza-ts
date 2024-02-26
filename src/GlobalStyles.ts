import { createGlobalStyle } from "styled-components";
// import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #FFDF8C;
    font-family: "Montserrat", sans-serif;
  }
`;


export default GlobalStyles