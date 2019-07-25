import React, { Component } from 'react'
import { create } from './api'

class BlogCreate extends Component {
    state = {
        dataForm: {
            title: "",
            img: '',
            text:''
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
        const newBlog = this.state.dataForm
        const user = this.props.user
        create(user, newBlog)
            .then(() => alert('created'))
            .then(() => this.props.history.push('/blogs'))
            .catch((error) => console.log(error))
    }

    render(){
        return(
            <div className="form">
                <h3>Add New Blog</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label><br />
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title} /><br />
                    <label>Image-url:</label><br />
                    <input onChange={this.handleChange} type="text" name="img" value={this.state.dataForm.img_url} /><br />
                    <label>Content:</label><br />
                    <textarea onChange={this.handleChange} rows="20" cols="50" type="text" name="text" value={this.state.dataForm.text} /><br />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}
export default BlogCreate