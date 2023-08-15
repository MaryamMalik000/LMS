import React from 'react'
import Navbar from '../components/Navbar'
import SignupLogin from '../components/SignupLogin'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div className="layout-container">
        <Navbar/>
        <SignupLogin/>
  <Footer/>
    </div>
  )
}

export default Register