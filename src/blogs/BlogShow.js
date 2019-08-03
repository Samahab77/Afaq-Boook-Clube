import React, { Component } from 'react'
import { show } from './api';
import { Link, Route } from 'react-router-dom'
import CommentIndex from '../comments/CommentIndex'
import CommentShow from '../comments/CommentShow'
import './blog.scss'

class BlogShow extends Component {
    state = {
        blogs: {} //to return one object 
    }

    componentDidMount() {
        const user = this.props.user
        const blogeId = this.props.blogId
        show(user, blogeId)
            .then((response) => {
                const showBlog = response.data.blog
                console.log(response)
                this.setState({
                    blogs: showBlog
                })
            })
            .catch((error) => console.log(error));
    }
    render() {
        const id= this.state.blogs._id
        console.log("id", id)
        return (
            <div >
              
                <div className="blogindex" >
                <img src={this.state.blogs.img} alt="" />

                <div className="xxxxxxxx">

                        <h1>{this.state.blogs.title}</h1>
                        {/* <img src={this.state.blogs.img} alt="" /> */}
                        <p>{this.state.blogs.text}</p>
                </div>
                    <Link to={`/blogs/${id}/edit`}><button>Edit</button></Link>
            </div>
                <Link to={`/blogs/${id}/edit`}><button>Edit</button></Link>

            <div>
            <CommentIndex user={this.props.user} key={id} blogId={id}/>
            </div>
            
                {/* <Link to='/blogs/blog:_id/comments'  >Create</Link>
                <Route path='/blogs/blog:_id/comments'  component={CommentCreate} /> */}

                
                {/* <CommentShow user={this.props.user} blogId={id} key={id} /> */}

            </div>

        )
    }
}
export default BlogShow ;
