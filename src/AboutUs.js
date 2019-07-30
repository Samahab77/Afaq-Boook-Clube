import React, { Component } from 'react'
import video1 from './afaq-vedio.mp4'


 class AboutUs extends Component {
    render(){
        return(
        
            <div>
                <h1>About Us</h1>
                <video width="1000px" controls>
                    <source src={video1} type="video/mp4" />
                            Your browser does not support HTML5 video.
                </video>
                
            </div>
        )
    }
}

export default AboutUs;