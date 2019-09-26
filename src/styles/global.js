import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    font: 14px 'Open Sans', sans-serif;
    background: #FFF;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    -webkit-box-sizing: content-box;
    margin-left: auto;
    margin-right: auto
  }


`;
