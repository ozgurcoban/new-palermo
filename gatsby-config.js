/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const path = require('path');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Palermo Uppsala',
    descrition:
      'Välkommen till Palermo - Uppsalas 14:e nation! Njut av vår familjära atmosfär, läckra pizzor och drycker i hjärtat av staden, där studenter och lokalbefolkning möts.',
    author: 'Palermo Uppsala',
    siteUrl: 'https://palermo-uppsala.se',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lobster\:400`,
          `Garamond\:400,400i,500,600,700`,
          `Playfair Display\:400,400i,500,600,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
