import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  :root {
    --color-primary: #5192e6;
    --color-primary-light: hsla(214, 75%, 72%, 1);
    --color-secondary: #8b9096;
    --color-gray: #373b41;
    --color-dark-gray: #25272a;
  }

  #root {
    background-color: #18191c;
    color: white;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
