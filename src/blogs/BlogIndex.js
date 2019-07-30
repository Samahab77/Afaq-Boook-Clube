import React, { Component } from 'react'
import {index, destroy} from './api'
import { Link } from 'react-router-dom'
import './blog.scss'


class BlogsIndex extends Component {

    state = {
        blogs: []
        
    }
    
    componentDidMount() { 
        index(this.props.user)
            .then(response => {
                console.log(response)
                this.setState({
                    blogs: response.data.blogs
                
                })
            }) 
            .catch((error) => console.log(error))

    }
    destroy = (blogId) => {
        const user = this.props.user
        destroy(user, blogId)
            .then(() => alert('deleted'))
            .then(() => {
                const newBlog = this.state.blogs.filter((blog) => blog._id != blogId)
                this.setState({
                    blogs: newBlog
                })
            })
            .catch((error) => console.log(error))
    }
    render (){
       
        return(
            <div >
                {this.state.blogs.map((blog, index) => (
                    <div key={index} className="card mb-3 " >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={blog.img} className="card-img" alt="#" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{blog.title}</h3>
                                    {/* //////////// */}
                                    <strong className="card-title">By: {blog.author} </strong> 
                                    {/* ////////////// */}
                                    <p className="card-text">{blog.text}</p>
                                    <Link to={`/blogs/${blog._id}`}> <h5>Read </h5></Link>
                                   
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        {blog.timestamps}
                                     <button onClick={() => this.destroy(blog._id)}>Delete</button>


                                </div>
                            </div>
                        </div>
                    </div>


                    // <div key={index}>
                    // <div>
                    //  <div className="blog-card">
                    //         <img className="blog-img" src={blog.img} />
                    //       <div className="text-overlay">
                    //             <h2>{blog.title}</h2>
                    //                 <Link to={`/blogs/${blog._id}`}> <h5>Read </h5></Link>
                    //                 <p size="30" >{blog.text}</p> 
                    //                 <Link to={`/blogs/${blog._id}`}> <h5>Read </h5></Link>
                    //                 <button onClick={() => this.destroy(blog._id)}>Delete</button>
                        //  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus... &nbsp;&nbsp;<a href="#" class="read-more">Read More</a></p> */}
                            // </div>
                        // </div>
                        //  {/* <h2>{blog.title}</h2>  */}
                        // {/* <p></p> */}
                        // {/* <img src={blog.img} alt="img"/> */}
                        // {/* <p size="30" >{blog.text}</p> */}
                        // {/* <Link to={`/blogs/${blog._id}`}> <h5>Read </h5></Link> */}
                       
                   
                    // </div>
                       
            //    </div>
               ))}
            </div>
        )
    }

}
export default BlogsIndex
