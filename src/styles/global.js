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
  }

  body {
    font-family: 'Playfair Display', serif;
  }


  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
  }


  `;
