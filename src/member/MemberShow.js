import React, { Component } from 'react'
import { show } from './api';
import {Link,  withRouter } from 'react-router-dom'
import ReadMoreReact from 'read-more-react';


class MemberShow extends Component {
    state = {
        member: {} //to return one object 
    }

    componentDidMount() {
        const user = this.props.user
        const memberId = this.props.memberId


        show(user, memberId)
            .then((response) => {
                const showmember = response.data.user
                // console.log(showmember)
                // console.log(response)
                this.setState({
                    member: showmember
                })
                console.log(this.state.member.blogs)
            })
            .catch((error) => console.log(error));
    }
    render() {
        const id = this.props.match.params.id
        console.log("id", id)
        return (
            
            <div>
                <div>
                    <h4>{this.state.member.email}</h4>
                    <h4>{this.state.member.name}</h4>
                    <ul>
                        {this.state.member.blogs ? 
                            this.state.member.blogs.map((blog, index) => (

                                <div key={index} className="card mb-3 " >
                                    {/* <button onClick={() => this.destroy(blog._id)}>Delete</button> */}

                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={blog.img} className="card-img" alt="#" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{blog.title}</h4>
                                                {/* <p className="card-text"><small className="text-muted">created at: {blog.createdAt}</small></p> */}
                                                <p className="card-text"><ReadMoreReact text={blog.text} /> </p>
                                                <Link to={`/blogs/${blog._id}`}> <p>Read More </p></Link>
                                                <p className="card-text"><small className="text-muted">Last updated: {blog.updatedAt}</small></p>
                                                <p className="card-text"><small className="text-muted"> by: {blog.author} </small></p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                // <React.Fragment>
                                //     <h1>Title: {blog.title}</h1>
                                //     <img src={blog.img} />
                                //     <p>Text: {blog.text}</p>
                                //     <hr />

                                // </React.Fragment>
                                ))
                            
                            :
                            ''}

                    </ul>
                    {/* <Link to={`/comments/${id}/edit`}><button>Edit</button></Link> */}

                </div>

            </div>

        )
    }
}
export default withRouter(MemberShow);
