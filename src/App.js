import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute';
import Header from './header/Header';
import SignUp from './auth/components/SignUp';
import SignIn from './auth/components/SignIn';
import SignOut from './auth/components/SignOut';
import ChangePassword from './auth/components/ChangePassword';
import AlertDismissible from './auth/components/AlertDismissible';
import BlogsIndex from './blogs/BlogIndex';
import BlogShow from './blogs/BlogShow';
import BlogCreate from './blogs/BlogCreate';
import BlogEdit from './blogs/BlogEdit';
import BlogsIndexAll from './blogs/BlogIndexAll'
import BlogsShowAll from './blogs/BlogShowAll'
import SignUpAdmin from './auth/components/SignUpAdmin';
import { Home } from './home/home';
import Footer from './footer/Footer'
import AboutUs from './AboutUs'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <Route exact path='/' component={Home} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up/admin' render={() => (
            <SignUpAdmin alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn  setUser={this.setUser} />
          )} />
          <Route user={user} path='/blogs-all' component={BlogsIndexAll} />
          <Route excact path='/blogsShow-all/:id' render={(props) =>(
            <BlogsShowAll  user={user} blogId = { props.match.params.id } /> 
          )}/>

          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/blogs' render={() => (
            <BlogsIndex user={user} />
          )} />
        {/* //////////// */}
         
         {/* ////////////////////// */}
          <AuthenticatedRoute user={user} path='/blogs/:id' render={(props) => (
            <BlogShow user={user} blogId={props.match.params.id} />
          )} />
          <AuthenticatedRoute user={user} path='/create' render={() => (
            <BlogCreate user={user}  />
          )} />
          <AuthenticatedRoute user={user} path='/blogs/:id/edit' render={() => (
            <BlogEdit user={user} />
          )} />
          {/* <AuthenticatedRoute user={user} path='/blogs/:id/comments/:id' render={(props) => (
          )} /> */}
          <Route path='/aboutus' render={() => (
            <AboutUs  />
          )} />
         

        </main>
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default App
