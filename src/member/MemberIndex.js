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
                    <div key={index} className="w3-card-4">
             <header className="w3-container w3-light-grey">
                            <Link to={`/user/${user._id}`}><h4>{user.name}</h4></Link> 
                </header>
        <div className="w3-container">
                 {/* <p>1 new friend request</p> */}
                     <hr />
                     {/* <img src="img_avatar3.png" alt="Avatar" className="w3-left w3-circle" /> */}
                            <p>{user.email} from {user.city}.</p>
         </div>

                 <button className="w3-button w3-block w3-dark-grey">+ Follow </button>

                </div>
                 ))
                }
             </div>
        )
            }
        }
                
                
    // {/* // <div>
    // //             {this.state.users.map((user, index) => ( */}
    // {/* //                 // console.log(user) */}
    // {/* //                 <div key={index}   > */}
    // {/* //                     <h3>{user.name}</h3> */}
    // {/* //                 <Link to={`/user/${user._id}`}><h3>{user.email}</h3></Link> */}
    // {/* //                     <h3>{user.city}</h3> */}
    // {/* //                     <hr /> */}
    // {/* //                  </div> */}


    // {/* //             )) */}
    // {/* //             } */}
    // {/* // </div> */}
        
//         })
//         )
//  }

export default MemberIndex