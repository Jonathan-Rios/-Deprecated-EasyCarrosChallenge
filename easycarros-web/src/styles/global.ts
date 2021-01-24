import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
  }

  body {
     -webkit-font-smoothing: antialiased; // Deixa a fonte sem serrilhado "chrome"
  }

  input, button {
    background: #fff;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px; // quando diminuir o layout (mobile), não encosta na borda.
  }

  button {
    cursor: pointer;
  }
`;
