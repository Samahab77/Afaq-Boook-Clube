import React, { Component } from 'react'
import { show } from './api';
import { withRouter } from 'react-router-dom'


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
                    <h1>{this.state.member.email}</h1>
                    <h1>{this.state.member.name}</h1>
                    <ul>
                        {this.state.member.blogs ? 
                            this.state.member.blogs.map((blog, index) => (
                                <React.Fragment>
                                    <h1>Title: {blog.title}</h1>
                                    <p>Text: {blog.text}</p>
                                </React.Fragment>
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
