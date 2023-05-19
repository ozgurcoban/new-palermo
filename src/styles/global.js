import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #f9f9f9;
    --secondary-color: #f9f9f9;
    --tertiary-color: #f9f9f9;
    --quaternary-color: #f9f9f9;
    --quinary-color: #f9f9f9;
    --senary-color: #f9f9f9;
    --septenary-color: #f9f9f9;
    --octonary-color: #f9f9f9;
    --nonary-color: #f9f9f9;
    --denary-color: #f9f9f9;
    --primary-text-color: #f9f9f9;
    --secondary-text-color: #f9f9f9;

    --primary-font: 'Playfair Display', serif;

    --border-radius: 0.25rem;
    --transition: all 0.3s linear;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.tertiary};
      border-radius: 5px;
    }

    /* Firefox */
    scrollbar-color: ${({ theme }) => theme.colors.tertiary} transparent;
    scrollbar-width: thin;

    -webkit-overflow-scrolling: touch; // Smooth scrolling for iOS devices
  }

  body {
    font-family: 'Playfair Display', serif;

  }

  /* main {
    width: 100%;
  } */

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lobster', cursive;
    font-weight: 700;
  }

/* section header */
  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin: 2rem 0;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }

  h3 {
    font-size: clamp(1.5rem, 2vw, 1.8rem);
    margin-bottom: 1em;
  }

  p {
    margin: 2rem 0;
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: #e4cbaf;
    border-radius: 5px;
  } */


  `;
