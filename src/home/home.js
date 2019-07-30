import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'


export class Home extends Component{
    render(){
        return(
            <div class="background"><div class="content">
                <div class="block x1"> <Link to="/sign-up"><p>Join Us</p></Link></div>
                <div class="block x2"><p >Afaq Library</p> </div>
                <div class="block x3">
                    <img src='https://drsdlaw.org/templates/sdadvocacycom/2018/images/blog-icon.png'/>
                    <Link to='/blogs'><span>My Blogs</span></Link></div>
                <div class="block x4"> <Link to='/aboutus'><p>About Us</p></Link></div>
                <div class="block x5"><Link to='/blogs-all'><p>Afaq Blog</p></Link>
            </div>      
            </div>
            </div>
            
         )
    }
}