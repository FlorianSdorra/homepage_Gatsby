/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: 'Florian Sdorra',
    title: 'Gatsby-Home-Page',
    github: 'https://github.com/FlorianSdorra',
    linkedin: 'https://www.linkedin.com/in/florian-sdorra/'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Comfortaa\:300, 400,500,600,700`,
          `Abril Fatface`,
          `Libre Caslon Display`,
          `Open Sans`,
          `Poiret One`,
          `Cincel`,
          `Raleway`,
          `Raleway Dots`,
          `Baloo Tamma 2\:400,500,600,700,800`,
          `Bebas Neue`,
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}

