import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      city:'',
      phone_num:''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()
    // console.log(this.props)
    // console.log(this.state)
    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '', city: '', phone_num:'', name:''})
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { city, name, email, password, passwordConfirmation, phone_num } = this.state

    return (
      <div>
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>انشاء حساب جديد</h3>
        <label >اسم المستخدم:</label>
        <input
          required
          name="name"
          value={name}
          type="name"
          placeholder="User Name:"
          onChange={this.handleChange}
        />
        <label htmlFor="email">البريد الإلكتروني</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="example@example.com"
          onChange={this.handleChange}
        />
        <label htmlFor="password">كلمة المرور </label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">تأكيد كلمة المرور </label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <label >المدينة:</label>
        <input
          required
          name="city"
          value={city}
          type="city"
          placeholder="city"
          onChange={this.handleChange}
        />
        <label >رقم الجوال</label>
        <input
          
          name="phone_num"
          value={phone_num}
          type="phone_num"
          placeholder="9665XXXXXXXX"
          onChange={this.handleChange}
        />
        <button type="submit">انشاء حساب </button>
      </form>
        <button className="bl"  ><Link to="/sign-in">تسجيل الدخول</Link></button>

 </div>
    )
  }
}

export default withRouter(SignUp)
