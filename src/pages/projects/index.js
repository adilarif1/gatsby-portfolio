import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {portfolio, projectstyle} from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
export default function Home({data}) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
       <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <p>Data Analyst, UX designer & web developer based in Glasgow</p>
       
       
        <div className={projectstyle}>

            {projects.map(project => <Link to={"../projects/" + project.frontmatter.slug} key ={ project.id}>
                <div>
                
                <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                </div></Link>)}
                </div>

                <p>Like what you see? Email me at: {contact} for a quote</p>
        </div> 
        </Layout>
    )
}

export const query = graphql ` query ProjectPage {
    projects: allMarkdownRemark {
        nodes {
        frontmatter {
            title
            stack
            slug
            thumb {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                    blurredOptions: {toFormat: PNG}
                    transformOptions: {fit: COVER}
                )
                
            }
            }
        }
        id
        }
    }
    contact: site {
        siteMetadata {
        contact
        }
    }
    }
  `
 