import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password"><p>تغير كلمة المرور</p></Link>
    <Link to="/sign-out"><p>تسجيل الخروج</p></Link>
    <Link to='/create'><p>انشاء مدونة</p></Link>
    <Link to='/members'><p>اعضاء آفاق </p></Link>

    {/* <Link to='/blogs'><p>Blogs</p></Link> */}
  

  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    {/* <Link to="/sign-up">Sign Up</Link> */}
    {/* <Link to="/sign-in">Sign In</Link> */}
    {/* <Link to='/blogs-all'><p >All Blogs</p></Link> */}
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/"><p>الصفحة الرئيسية</p></Link>
    {/* <Link to='/blogs-all'>All Blogs</Link>  */}

  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <img src='https://afaqbookclubhome.files.wordpress.com/2019/02/cropped-d8b4d8b9d8a7d8b1-d986d8a7d8afd98a-d8a2d981d8a7d982-d8a7d984d982d8b1d8a2d8a1d8a9-1.png' alt=""/>
    <nav>
      {user && <p>مرحبا بك , {user.name} {
}</p>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
