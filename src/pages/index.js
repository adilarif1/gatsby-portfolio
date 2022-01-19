import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "./components/Layout"
import {header, btn} from "../styles/home.module.css"

import { StaticImage } from "gatsby-plugin-image"
export default function Home({data}) {

  console.log(data)
  return (
  
    <Layout>
    <section className={header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Data Analyst, UX designer & web developer based in Glasgow</p>
        <Link className={btn} to="../projects">My Portfolio Projects</Link>
      </div>
      <StaticImage src="../../src/images/me.png" alt="site banner me" placeholder="none" loading="eager" layout="constrained" aspectRatio= "21/9"  />
      {/*<StaticImage fluid={data.file.childrenImageSharp.fluid.src}/>*/}
    </section>
    </Layout>


  )
  
}


export const query = graphql`

query Me {
  file(relativePath: {eq: "me.png"}) {
    childrenImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`