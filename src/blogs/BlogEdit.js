import React, { Component } from 'react';
import { show, update } from './api';
import { withRouter } from 'react-router-dom';


class BlogEdit extends Component {
    state = {
        dataForm: {
            title: '',
            img: '',
            text:''
        }
    }
    componentDidMount() {
        const user = this.props.user;
        const blogId= this.props.match.params.id;
        show(user, blogId)
            .then((response) => {
                const blog = response.data.blog
                this.setState({
                    dataForm: blog
                })
            })
            .catch(error => console.log(error))
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
        console.log(this.props)
        const user = this.props.user;
        const blogId = this.props.match.params.id;
        const updateBlog = this.state.dataForm;
        update(user, updateBlog, blogId)
            .then(() => this.props.history.push(`/blogs/${blogId}`))
            .catch((error) => console.log(error))
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h3>Add New Blog</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label><br />
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title} /><br />
                    <label>Image-url:</label><br />
                    <input onChange={this.handleChange} type="text" name="img" value={this.state.dataForm.img_url} /><br />
                    <label>Content:</label><br />
                    <textarea onChange={this.handleChange} rows="20" cols="50" type="text" name="text" value={this.state.dataForm.text} /><br />
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }


    }
export default withRouter(BlogEdit);
