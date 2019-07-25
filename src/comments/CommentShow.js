import React, { Component } from 'react'
import { show } from './api';
import { Link } from 'react-router-dom'


class CommentShow extends Component {
    state = {
        comments: {} //to return one object 
    }

    componentDidMount() {
        const user = this.props.user
        const blogeId = this.props.blogId
        const commentId = this.props.commentId
        show(user, blogeId, commentId)
            .then((response) => {
                const showComment = response.data.comment
                console.log(response)
                this.setState({
                    comments: showComment
                })
            })
            .catch((error) => console.log(error));
    }
    render() {
        const id= this.state.comments._id
        console.log("id", id)
        return (
            <div>
            <div>
            <h1>{this.state.comments.name}</h1>
              <p>{this.state.comments.comment}</p>
                {/* <Link to={`/comments/${id}/edit`}><button>Edit</button></Link> */}

            </div>
            
                {/* <CommentCreate updateComment={this.updateComment} user={this.props.user} key={id} blogId={id}/> */}
            </div>

        )
    }
}
export default CommentShow ;
