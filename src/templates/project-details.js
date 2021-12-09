import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {Img} from 'gatsby-image'
import React from 'react'
import Layout from '../pages/components/Layout'
import {details, featured, html} from "../styles/project-details.module.css" 
export default function projectDetails({data}) {

    const featuredImage = getImage(data.markdownRemark.frontmatter.featured.childImageSharp.gatsbyImageData)
    const {html} = data.markdownRemark
    const {title, stack} = data.markdownRemark.frontmatter
    return (
        <Layout>

        <div className={details}>
           
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={featured}>

                <GatsbyImage image={featuredImage} alt="Banner" />
                </div>

                <div className={html} dangerouslySetInnerHTML={{__html: html}}/>
            </div>
       

        </Layout>
            
       
    )
}

export const query = graphql `query EachProjectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        stack
        title
        featured {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, AVIF]
              )
            }
          }
      }
    }
  }`
