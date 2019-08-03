import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'


export class Home extends Component{
    render(){
        return(
            <div className="background"><div className="content">
                <div className="block x1"> <Link to="/sign-up"><p>انضم معنا </p></Link></div>
                <div className="block x2"><Link to='/members'><p>اعضاء افآق</p></Link></div>
                <div className="block x3">
                    <img src='https://drsdlaw.org/templates/sdadvocacycom/2018/images/blog-icon.png'/>
                    <Link to='/blogs'><span>مدوناتي</span></Link></div>
                <div className="block x4"> <Link to='/aboutus'><p>عن آفاق </p></Link></div>
                <div className="block x5"><Link to='/blogs-all'><p>مدونة آفاق </p></Link>
            </div>      
            </div>
            </div>
            
         )
    }
}