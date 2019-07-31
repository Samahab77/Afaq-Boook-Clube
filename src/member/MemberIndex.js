import React, { Component } from 'react'
import { index } from './api'
import { Link } from 'react-router-dom'


 class MemberIndex extends Component{
     state = {
         users: []

     }
     componentDidMount() {
         index(this.props.user)
             .then(response => {
                 console.log(response)
                 this.setState({
                     users: response.data.users
                 })
             })
             .catch((error) => console.log(error))

     }
    render(){
        return(
         
    <div>
                {this.state.users.map((user, index) => (
                    // console.log(user)
                    <div key={index}   >
                    <Link to={`/user/${user._id}`}><h3>{user.email}</h3></Link> 
                     </div>


                ))
                }
    </div>
        
        )}
 }
export default MemberIndex