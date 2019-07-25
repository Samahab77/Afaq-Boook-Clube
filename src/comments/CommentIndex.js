import React, { Component } from 'react'
import { index, destroy} from './api'
// import { Link } from 'react-router-dom'
import CommentCreate from '../comments/CommentCreate';


class CommientIndex extends Component {

    state = {
        comments: []
    }
    
    updateComment = () => {
        index(this.props.user, this.props.blogId)
            .then(response => {
                console.log('response', response)
                this.setState({
                    comments: response.data.comments
                })
            })
            .catch((error) => console.log(error))

    }
    componentDidMount() {
       this.updateComment()
    }

    destroy = (commentId) => {
        const user = this.props.user
        destroy(user, commentId)
            .then(() => alert('deleted'))
            .then(() => {
                const newcomment = this.state.comments.filter((comment) => comment._id != commentId)
                this.setState({
                    comments: newcomment
                })
            })
            .catch((error) => console.log(error))
    }
    
    render (){
        console.log('comments', this.state.comments)
        return(
            <div>
                {this.state.comments.map((comment, index) => (
                    
                    <div key={index}>
                        <h2>{comment.name}</h2>
                        <p>{comment.comment}</p>
                        <button onClick ={() => this.destroy(comment._id)}>Delete</button>

                    </div>
                ))}
                <CommentCreate updateComment={this.updateComment} user={this.props.user} blogId={this.props.blogId} />

            </div>
        )
    }

}
export default CommientIndex


































