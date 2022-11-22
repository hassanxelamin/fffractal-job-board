import { css } from 'styled-components';

export const BaseStyles = css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Satoshi';
    font-weight: 400;
  }

  a {
    color: inherit;
    outline: none;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    outline: none;
  }

  img {
    vertical-align: middle;
  }
`;
