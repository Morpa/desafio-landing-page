import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;

    &::before,
    &::after {
      box-sizing:inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Encode Sans Expanded',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
