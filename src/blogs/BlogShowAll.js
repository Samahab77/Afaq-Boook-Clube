import React, { Component } from 'react'
import { showAll} from './api';
import CommentIndex from '../comments/CommentIndex'
import CommentCreate from '../comments/CommentCreate';
import { showAllComment} from '../comments/api'
// import { Link, Route } from 'react-router-dom'
// import CommentIndex from '../comments/CommentIndex'
// import CommentShow from '../comments/CommentShow'


class BlogShowAll extends Component {
    state = {
        blog: {} //to return one object 
    }

    componentDidMount() {
        const blogeId = this.props.blogId
        console.log("bloge id", blogeId)

        //for blogs
        showAll(blogeId)
            .then((response) => {
                const showBlog = response.data.blog
                console.log(response)
                this.setState({
                    blog: showBlog
                })
            })
            .catch((error) => console.log(error));

        //for comments
        showAllComment(blogeId)
        .then(res=>(
            console.log(res)
        ))
        .catch(error => console.log(error))
    }
    render() {
        // console.log("id", id)
        const id = this.state.blogId

        return (

            <div>
            <div>
                <h1>{this.state.blog.title}</h1>
                <img src={this.state.blog.img} alt="" />
                <p>{this.state.blog.text}</p>
                
            </div>
            <div>
            </div>
                <div>
    
                    <CommentIndex user={this.props.user} key={id} blogId={id} />

                </div>
            </div>

        )
    }
}
export default BlogShowAll ;
