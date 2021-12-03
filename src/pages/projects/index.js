import React from 'react'
import Layout from '../components/Layout'
import {portfolio, projectstyle} from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby'
export default function Home({data}) {
    console.log(data)
    const projects = data.allMarkdownRemark.nodes
    return (
        <Layout>
        
        <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <p>Data Analyst, UX designer & web developer based in Glasgow</p>
       
       
        <div className={projectstyle}>

            {projects.map(project => <Link to={"projects/" + project.frontmatter.slug} key ={ project.id}>
                <div>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                </div></Link>)}
                </div>
        </div>
        </Layout>
    )
}

export const query = graphql `query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
  `
 