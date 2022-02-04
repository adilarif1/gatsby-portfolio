import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "./components/Layout"
import {header, hand1 , btn, flexcontainer, flexitemleft, flexitemright, screen, innerdiv} from "../styles/home.module.css"
import Fade from 'react-reveal/Fade';
import { StaticImage } from "gatsby-plugin-image"
export default function Home({data}) {

  
  return (
  
    <Layout>
   
  <div className={flexcontainer}>
  <div className={flexitemleft}><StaticImage src="../../src/images/me.png" alt="site banner me" placeholder="none" loading="eager" width={350} height={400} layout="constrained" aspectRatio= "21/9"  /></div>
  
  <Fade left>
  <div className={flexitemright}><h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Data Analyst, UX designer & web developer based in Glasgow</p>
        <Link className={btn} to="../projects">My Projects</Link>
  </div></Fade>
</div>
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