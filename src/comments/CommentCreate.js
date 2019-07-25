import React, { Component } from 'react'
import { create } from './api'
// import { withRouter } from 'react-router-dom'

class CommentCreate extends Component {
    state = {
        dataForm: {
            name: "",
            Comment: ''
        }
        
    }
    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm: newForm
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = this.state.dataForm
        const user = this.props.user
        const blogId = this.props.blogId
        create(user, newComment, blogId)
            .then(() => alert('created'))
            .then(() => this.props.updateComment())
            .catch((error) => console.log(error))
    }

    render(){
        return(
            <div>
                <h3>Add New Comment</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>name:</label><br />
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.dataForm.name} /><br />
                    <label>Comment:</label><br />
                    <input onChange={this.handleChange} type="text" name="comment" value={this.state.dataForm.comment} /><br />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}
export default CommentCreate