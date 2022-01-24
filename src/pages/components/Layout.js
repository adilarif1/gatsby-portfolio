import React from 'react'
import Navbar from './Navbar'
import '../../styles/global.css'
import {header, hand1 , btn, flexcontainer, flexitemleft, flexitemright} from "../../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
export default function Layout({children}) {
    return (
        
        <div className="layout">
            
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2022 Adil Arif</p>
            </footer>
        </div>
    )
}
