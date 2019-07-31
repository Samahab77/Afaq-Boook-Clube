import React, { Component } from 'react'
import { indexAll} from './api'
import { Link } from 'react-router-dom'
import './blog.scss'
import ReadMoreReact from 'read-more-react';


class BlogsIndexAll extends Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        indexAll()
            .then(response => {
                console.log(response)
                this.setState({
                    blogs: response.data.blogs
                })
            })
            .catch((error) => console.log(error))

    }
    render() {

        return (
            <div >
                <h3 className="h3">Afaq Blogs</h3>
    <div className="mainCard">
        {this.state.blogs.map((blog, index) => (
            <div key={index} className="card mb-3 " >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={blog.img} className="card-img" alt="#" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{blog.title}</h4>
                          {/* <p className="card-text"><small className="text-muted">created at: {blog.createdAt}</small></p> */}
                            <p className="card-text"><ReadMoreReact text={blog.text} /> </p>
                        <Link to={`/blogsShow-all/${blog._id}`}> <p>Read More </p></Link>
                <p className="card-text"><small className="text-muted">Last updated: {blog.updatedAt}</small></p>
                            <p className="card-text"><small className="text-muted"> by: {blog.author} </small></p>

                    </div>

                    </div>
                </div>
            </div>
        ) )}
    </div>
            </div>

        )
    }

}
export default BlogsIndexAll

