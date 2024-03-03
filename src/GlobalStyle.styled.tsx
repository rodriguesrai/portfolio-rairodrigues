import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundMain: #0E1D05;
    --backgroundHeader: #010B13;
    --text: #333333;
    --green1: #004241;
    --green2: #006A4F;
    --green3: #0C8054;
    --green4: #4B5E0C;
    --green5: #2E3B0A;
    --laranja1: #EBC059;
    --laranja2: #BA8330;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--laranja1);
  }
    
  body, h1, h2, h3, h4, h5, h6, p, ul {
    color: var(--laranja1);
}  
`

export default GlobalStyle
