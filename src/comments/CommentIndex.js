import React, { Component } from 'react'
import { index, destroy} from './api'
// import { Link } from 'react-router-dom'
import CommentCreate from '../comments/CommentCreate';
import {withRouter} from 'react-router-dom'
import { showAllComment } from '../comments/api'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './comment.css'

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
        if (this.props.user){
            this.updateComment()
        }
            console.log('you have to sign-in')
            const id = this.props.match.params.id
            showAllComment(id)
                .then(response => {
                    console.log(response)
                    this.setState({
                        comments: response.data.comments
                    })
                })
                .catch(error => console.log(error))
        
      
    }

    
    destroy = (commentId) => {
        const user = this.props.user
        const blogId = this.props.blogId

        destroy(user,blogId ,commentId)
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
            <div className="comments">
                <h3> Comments </h3>

                {this.state.comments.map((comment, index) => (
                    
                    <div key={index}className="commentIndex">
                        <Card>
                            {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                            <CardBody>
                                <CardTitle><h5>{comment.name}</h5></CardTitle> 
                                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                <CardText>{comment.comment}</CardText>
                                {/* <Button>Like</Button> */}
                            </CardBody>
                        </Card>
                    </div>
                    // <div key={index}>
                    //     <h2>{comment.name}</h2>
                    //     <p>{comment.comment}</p>
                    //     <button onClick={() => this.destroy(comment._id)}>Delete</button>

                    // </div>
                ))}
                
                {this.props.user ?
                    <CommentCreate updateComment={this.updateComment} user={this.props.user} blogId={this.props.blogId} />
                     :
                     ''}
            </div>
        )
    }

}
export default withRouter(CommientIndex)


































