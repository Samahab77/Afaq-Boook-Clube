import React, { Component } from 'react'
import { indexAll} from './api'
import { Link } from 'react-router-dom'
import './blog.scss'


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
            <div>
                {this.state.blogs.map((blog, index) => (
                            <div key={index} className="card mb-3 " >
                               <div className="row no-gutters">
     
                                     <div className="col-md-4">
                                        <img src={blog.img} className="card-img" alt="#" />
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{blog.title}</h5>
                                            <p className="card-text">{blog.text}</p>
                                            <Link to={`/blogsShow-all/${blog._id}`}> <h5>Read </h5></Link>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    
                ) )}
            </div>
        )
    }

}
export default BlogsIndexAll

