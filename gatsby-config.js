require("dotenv").config({
  path : ".env"
})
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Data Fetching Examples`,
    description: `Examples for data fetching at build time and runtime.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options : {
        typeName : "COUNTRIES", 
        fieldName : "countries",
        url: `http://countries.trevorblades.com/`
      }
    }
  ],
}
