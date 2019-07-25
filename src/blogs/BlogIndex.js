import React, { Component } from 'react'
import {index, destroy} from './api'
import { Link } from 'react-router-dom'


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
            <div>
                {this.state.blogs.map((blog, index) => (
                    
                    <div key={index}>
                         <h2>{blog.title}</h2> 
                        {/* <p></p> */}
                        <img src={blog.img} alt="img"/>
                        {/* <p size="30" >{blog.text}</p> */}
                        <Link to={`/blogs/${blog._id}`}> <h5>Read </h5></Link>
                        <button onClick={() => this.destroy(blog._id)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }

}
export default BlogsIndex
