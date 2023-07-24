import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

button,
input,
textarea,
select {
  font-family: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  padding: 0;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyle;
