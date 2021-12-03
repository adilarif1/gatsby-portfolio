/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  
  plugins: [ 
    
    'gatsby-transformer-remark',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/pages/projects/`,
    },
  },],
    
    
  siteMetadata:{
    title: 'Adil Arif',
    description: 'Web Developer Mobile Developer Glasgow'

  },
  
}

