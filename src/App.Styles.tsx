import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}
    // Variables
  :root {
    --montserrat: 'Montserrat', sans-serif;

    --white: #ffffff;
    --black: #060931;
    --light-blue: #F0F6FF;
    --gray: #142353;
    --light-gray: #8A92AD;
    --blue: #3B8EFF;
    --green: #11B435;
    --turquoise: rgba(92, 214, 207, 0.75);
    --dark-turquoise: rgba(92, 214, 207, 1);
    --light-turquoise: rgba(92, 214, 207, 0.5);
    --dark-white: #FCFCFC;
    --dark-gray: #292f39;
    --violet: #8000ff;
    --pink: #dd59f8;
    --red: #B01616;
    --light: #eaeaea;
    --dark: #373d47;
    --light-brown: #636363;
    --brown: #434343;
    --dark-blue: #15172E;

    --ametis: #D95CF9;
    --lazurit: #689EF4;
    --nefrit: #02E271;
    --emerald: #00FFB2;
    --ruby: #FF005C;
    --saphire: #5D31FC;
    --diamond: #00E1EF;

    --border-radius: 8px;

    --horizontal-border: linear-gradient(90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.06) 71.01%,
    rgba(255, 255, 255, 0) 99.52%);
    --vertical-border: linear-gradient(rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.06) 71.01%,
    rgba(255, 255, 255, 0) 99.52%);
  }


  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    min-width: 320px;
    font-family: var(--montserrat);
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: left;
    scrollbar-width: none;
    background-color: var(--light-blue);

    ::-webkit-scrollbar {
      display: none;
    }
  }

  html, body, #app {
    height: 100%;
    font-family: var(--montserrat);
  }

  img {
    width: 100%;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--gray);
    }

    &:focus {
      outline: none;
      color: var(--light-gray);
    }
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  ::selection {
    background-color: rgba(196, 196, 196, 0.5);
    color: var(--white);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
