import React from 'react'
import Layout from '../components/Layout'
import {portfolio} from "../../styles/projects.module.css"
export default function Home() {
    return (
        <Layout>
        <section>
        <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <p>Data Analyst, UX designer & web developer based in Glasgow</p>
        </div>
        </section>
        </Layout>
    )
}
