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
        <Link className={btn} to="/projects">My Portfolio Projects</Link>
      </div>
      <img src="/me.png" alt="site banner me"  style={{maxWidth:'100%'}}></img>
    </section>
    </Layout>


  )
  
}
export const query = graphql`query MyQuery {
  site {
    host
    id
    port
    parent {
      id
    }
    siteMetadata {
      title
      description
    }
  }
}
`
