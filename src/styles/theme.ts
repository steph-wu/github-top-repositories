import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#14b398',
  grey: '#f2f2f2',
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Andale Mono', Calibri, 'Trebuchet MS', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
