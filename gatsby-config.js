module.exports = {
  siteMetadata: {
    title: 'Gatsby - TTF Starter',
    description: `Kick off your project with this typesript-tailwind-framer boilerplate. This starter is a Typescript starter that includes Tailwind CSS and Framer Motion and some additional packages and plugins to let you start right away.`,
    author: 'Izzuddin Natsir',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
